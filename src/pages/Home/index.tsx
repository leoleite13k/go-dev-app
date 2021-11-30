/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useSprings } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import {
  Container,
  ContentAchievement,
  HeaderAchievement,
  AchievementList,
  ContentTrack,
  Track,
} from './styles';

const achievements = [
  {
    id: 1,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 2,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 3,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 4,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 5,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 6,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 7,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 8,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 9,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 10,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 11,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 12,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 13,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 14,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
  {
    id: 15,
    title: 'First Achivement',
    photoUrl:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Foto-Trof%C3%A9u-PNG.png',
    description: 'You won your first achivement',
  },
];

const tracks = [
  {
    id: 1,
    title: 'JavaScript',
    photoUrl: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'Track of JavaScript',
  },
  {
    id: 2,
    title: 'JavaScript',
    photoUrl: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'Track of JavaScript',
  },
  {
    id: 3,
    title: 'JavaScript',
    photoUrl: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'Track of JavaScript',
  },
  {
    id: 4,
    title: 'JavaScript',
    photoUrl: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'Track of JavaScript',
  },
  {
    id: 5,
    title: 'JavaScript',
    photoUrl: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'Track of JavaScript',
  },
];

const Home: React.FC = () => {
  const [showLeftAchievement, setShowLeftAchievement] = useState(false);
  const [showRightAchievement, setShowRightAchievement] = useState(false);
  const [styleAnimateTrack, apiAnimateTrack] = useSprings(
    tracks.length,
    () => ({ scale: 1 }),
  );
  const history = useHistory();

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
    const heightAchievementList =
      document.getElementById('achievementList')?.clientHeight || 0;
    setShowRightAchievement(heightAchievementList < achievements.length * 118);
  }, []);

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
        <AchievementList id="achievementList">
          {achievements.map(({ id, title, photoUrl }) => (
            <div key={id}>
              <img src={photoUrl} alt={title} />
            </div>
          ))}
        </AchievementList>
      </ContentAchievement>

      <h1>Trilhas</h1>
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
    </Container>
  );
};

export default Home;
