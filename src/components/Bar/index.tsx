import React, { useState, useEffect } from 'react';
import { BigHead } from '@bigheads/core';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import { TUser } from '../../hooks/auth/interface';
import { Container, ContentAvatar, ContentTracks, Track } from './styles';

const tracks = [
  {
    id: 1,
    title: 'HTML',
    photo_url: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'You won your first achivement',
  },
  {
    id: 2,
    title: 'CSS',
    photo_url: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'You won your first achivement',
  },
  {
    id: 3,
    title: 'JavaScript',
    photo_url: 'https://tipscode.com.br/uploads/2020/01/javascript.png',
    description: 'You won your first achivement',
  },
];

export const Bar: React.FC = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const userString: string = localStorage.getItem('@GoDev:user') as string;
  const user: TUser = JSON.parse(userString);

  const handleMoveTrackList = (position: 'up' | 'down') => {
    const currentScrolllTop =
      document.getElementById('trackList')?.scrollTop || 0;
    const heightTrack =
      document.getElementById(`track-${tracks[0].id}`)?.clientHeight || 0;
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

  useEffect(() => {
    const heightTrackList =
      document.getElementById('trackList')?.clientHeight || 0;
    setShowScrollDown(heightTrackList < tracks.length * 208);
  }, []);

  return (
    <Container>
      {user?.profile && (
        <ContentAvatar>
          <BigHead {...user.profile.avatar_options} />
          <span>{`Lvl. ${user.profile.level}`}</span>
        </ContentAvatar>
      )}

      <ContentTracks id="trackList">
        {showScrollUp && (
          <button type="button" onClick={() => handleMoveTrackList('up')}>
            <IoMdArrowDropup size={22} />
          </button>
        )}
        {tracks.map(({ id, title, photo_url, description }) => (
          <Track id={`track-${id}`}>
            <img src={photo_url} alt={description} />
            <span>{title}</span>
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
