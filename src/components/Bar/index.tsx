import React, { useState, useEffect } from 'react';
import { BigHead } from '@bigheads/core';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useSprings } from 'react-spring';
import { useHistory } from 'react-router-dom';

import { useBar } from '../../hooks/bar';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  ContentAvatar,
  ContentTracks,
  Track,
  Percent,
} from './styles';

export const Bar: React.FC = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const history = useHistory();
  const { getUserTracks, userTracks } = useBar();
  const { user } = useAuth();

  const animatePercents = useSprings(
    userTracks.length,
    userTracks.map(({ percentCompleted }) => ({
      from: {
        width: '0%',
      },
      to: {
        width: `${percentCompleted}%`,
      },
      config: {
        duration: 1000,
      },
    })),
  );

  const handleMoveTrackList = (position: 'up' | 'down') => {
    const currentScrolllTop =
      document.getElementById('trackList')?.scrollTop || 0;
    const heightTrack =
      document.getElementById(`track-${userTracks[0].id}`)?.clientHeight || 0;
    const heightTrackList =
      document.getElementById('trackList')?.clientHeight || 0;

    if (position === 'down') {
      setShowScrollUp(true);
      setShowScrollDown(currentScrolllTop < heightTrackList - heightTrack);
      document.getElementById('trackList')?.scrollBy({
        top: heightTrack,
        behavior: 'smooth',
      });
    } else {
      setShowScrollDown(true);
      setShowScrollUp(currentScrolllTop > heightTrack);
      document.getElementById('trackList')?.scrollBy({
        top: -heightTrack,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenTrack = (id: number) => {
    history.push(`/track/${id}`);
  };

  useEffect(() => {
    const heightTrackList =
      document.getElementById('trackList')?.clientHeight || 0;
    setShowScrollDown(heightTrackList < userTracks.length * 208);
  }, [userTracks.length]);

  useEffect(() => {
    getUserTracks();
  }, [getUserTracks]);

  return (
    <Container>
      {user?.profile && (
        <ContentAvatar>
          <BigHead {...user.profile.avatarOptions} />
          <span>{`Lvl. ${user.profile.level}`}</span>
        </ContentAvatar>
      )}

      <ContentTracks id="trackList">
        {showScrollUp && (
          <button type="button" onClick={() => handleMoveTrackList('up')}>
            <IoMdArrowDropup size={22} />
          </button>
        )}
        {animatePercents.map((styles, index) => (
          <Track
            id={`track-${userTracks[index].id}`}
            onClick={() => handleOpenTrack(userTracks[index].id)}
          >
            <img
              src={userTracks[index].photoUrl}
              alt={userTracks[index].description}
            />
            <div className="percent">
              <span>{`${userTracks[index].percentCompleted} %`}</span>
              <Percent style={styles} />
            </div>
          </Track>
        ))}
        {showScrollDown && (
          <button type="button" onClick={() => handleMoveTrackList('down')}>
            <IoMdArrowDropdown size={22} />
          </button>
        )}
      </ContentTracks>
    </Container>
  );
};
