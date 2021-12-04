/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useCallback } from 'react';
import { useSprings } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import api from '../../services/api';
import { LoadingAchievements, LoadingTracks } from '../../components/Shimmer';
import { ITrack, IUserAchievement } from './interface';
import {
  Container,
  ContentAchievement,
  HeaderAchievement,
  AchievementList,
  ContentTrack,
  Track,
} from './styles';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [userAchievements, setUserAchievements] = useState<IUserAchievement[]>(
    [],
  );
  const [showLeftAchievement, setShowLeftAchievement] = useState(false);
  const [showRightAchievement, setShowRightAchievement] = useState(false);
  const [styleAnimateTrack, apiAnimateTrack] = useSprings(
    tracks.length,
    () => ({ scale: 1 }),
  );
  const history = useHistory();

  const getHome = useCallback(async () => {
    try {
      setIsLoading(true);
      const [{ data: dataTracks }, { data: dataAchievements }] =
        await Promise.all([api.get('/tracks'), api.get('/userAchivements')]);

      setTracks(dataTracks);
      setUserAchievements(dataAchievements);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleMoveArchieviment = (position: 'right' | 'left') => {
    const currentScrolllLeft =
      document.getElementById('achievementList')?.scrollLeft || 0;
    const widthAchievement = 142;

    if (position === 'right') {
      setShowLeftAchievement(true);
      setShowRightAchievement(true);
      document.getElementById('achievementList')?.scrollBy({
        left: widthAchievement,
        behavior: 'smooth',
      });
    } else {
      setShowRightAchievement(true);
      setShowLeftAchievement(currentScrolllLeft > widthAchievement);
      document.getElementById('achievementList')?.scrollBy({
        left: -widthAchievement,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!isLoading) {
      const widthAchievementList =
        document.getElementById('achievementList')?.clientWidth || 0;

      setShowRightAchievement(
        widthAchievementList < userAchievements.length * 118,
      );
    }
  }, [isLoading, userAchievements]);

  useEffect(() => {
    getHome();
  }, [getHome]);

  return (
    <Container>
      <ContentAchievement>
        <HeaderAchievement>
          <h1>Conquitas</h1>
          <div>
            {showLeftAchievement && (
              <button
                type="button"
                onClick={() => handleMoveArchieviment('left')}
              >
                <IoMdArrowDropleft size={24} />
              </button>
            )}
            {showRightAchievement && (
              <button
                type="button"
                onClick={() => handleMoveArchieviment('right')}
              >
                <IoMdArrowDropright size={24} />
              </button>
            )}
          </div>
        </HeaderAchievement>

        {isLoading ? (
          <LoadingAchievements />
        ) : (
          <AchievementList id="achievementList">
            {userAchievements.map(({ id, title, photoUrl }) => (
              <div key={id} className="achievement">
                <img src={photoUrl} alt={title} />
              </div>
            ))}
          </AchievementList>
        )}
      </ContentAchievement>

      <h1>Trilhas</h1>
      {isLoading ? (
        <LoadingTracks />
      ) : (
        <ContentTrack>
          {styleAnimateTrack.map((styles, index) => (
            <Track
              key={index}
              style={styles}
              onMouseEnter={() =>
                apiAnimateTrack.start(i =>
                  i === index ? { scale: 1.08 } : { scale: 1 },
                )
              }
              onMouseLeave={() => apiAnimateTrack.start(() => ({ scale: 1 }))}
              onClick={() => history.push(`/track/${tracks[index].id}`)}
            >
              <img src={tracks[index].photoUrl} alt={tracks[index].title} />
            </Track>
          ))}
        </ContentTrack>
      )}
    </Container>
  );
};

export default Home;
