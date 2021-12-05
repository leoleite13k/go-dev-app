/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useCallback, useState, createRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import { useSpring } from 'react-spring';
import { BiRectangle } from 'react-icons/bi';
import { IoIosRefresh } from 'react-icons/io';

import { useBar } from '../../hooks/bar';
import api from '../../services/api';
import { IParams, ITrackLessons, ILesson } from './interface';
import {
  Container,
  Description,
  Content,
  CurrentLesson,
  Controls,
  Lessons,
  Lesson,
  Status,
} from './styles';
import { Switch } from '../../components/Switch';

const Track: React.FC = () => {
  const [track, setTrack] = useState<ITrackLessons>();
  const [currentLesson, setCurrentLesson] = useState<ILesson>();
  const [playing, setPlaying] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showLessons, setShowLessons] = useState(true);
  const { getUserTracks } = useBar();

  const params = useParams<IParams>();
  const refPlayer = createRef<ReactPlayer>();

  const animateLesson = useSpring({
    width: showLessons ? '100%' : '0%',
    minWidth: showLessons ? 200 : 0,
    config: {
      duration: 700,
    },
  });

  const handleChangeLesson = (lesson: ILesson) => {
    setPlaying(autoPlay);
    setCurrentLesson(lesson);
  };

  const handleChangeCompleted = async (lesson: ILesson) => {
    const newLessons = track?.lessons.map(current => ({
      ...current,
      completed:
        current.id === lesson.id ? !lesson.completed : current.completed,
    }));

    setTrack(
      oldTrack => ({ ...oldTrack, lessons: newLessons } as ITrackLessons),
    );

    await api.post('/userTrackLessons', {
      trackId: track?.id,
      lessonId: lesson.id,
    });
    await getUserTracks();
  };

  const onEndedLesson = async (lesson: ILesson | undefined) => {
    const lessons = track?.lessons || [];

    const indexLesson = lessons.findIndex(cLesson => cLesson.id === lesson?.id);

    setTrack(
      oldTrack =>
        ({
          ...oldTrack,
          lessons: oldTrack?.lessons.map(cLesson => ({
            ...cLesson,
            completed: cLesson.id === lesson?.id ? true : cLesson.completed,
          })),
        } as ITrackLessons),
    );

    if (lessons.length - 1 > indexLesson) {
      setCurrentLesson(lessons[indexLesson + 1]);
    }

    setPlaying(autoPlay);

    if (lesson?.completed) return;

    await api.post('/userTrackLessons', {
      trackId: track?.id,
      lessonId: lesson?.id,
    });
    await getUserTracks();
  };

  const handleBackTenSeconds = () => {
    setPlaying(true);
    refPlayer.current?.seekTo(refPlayer.current.getCurrentTime() - 10);
  };

  const handleNextTenSeconds = () => {
    setPlaying(true);
    refPlayer.current?.seekTo(refPlayer.current.getCurrentTime() + 10);
  };

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const handleShowLessons = () => {
    setShowLessons(!showLessons);
  };

  const getTrack = useCallback(async () => {
    const { data } = await api.get(`tracks/${params?.id}`);
    setTrack(data);
  }, [params]);

  useEffect(() => {
    getTrack();
  }, [getTrack]);

  useEffect(() => {
    if (!currentLesson) {
      const lessonCompleted =
        track?.lessons.filter(({ completed }) => completed === true) || [];

      if (lessonCompleted.length > 0) {
        setCurrentLesson(lessonCompleted[lessonCompleted.length - 1]);
        return;
      }

      setCurrentLesson(track?.lessons[0]);
    }
  }, [track?.lessons, currentLesson]);

  return (
    <Container>
      <div className="header">
        <h1>{track?.title}</h1>
        <span>{track?.description}</span>
      </div>

      <Content>
        <CurrentLesson>
          <ReactPlayer
            ref={refPlayer}
            width="100%"
            height="100%"
            controls
            playing={playing}
            onEnded={() => onEndedLesson(currentLesson)}
            url={currentLesson?.content}
          />
          <Controls>
            <div className="buttons">
              <button type="button" onClick={handleBackTenSeconds}>
                <IoIosRefresh size={28} />
                <span>10</span>
              </button>
              <button type="button" onClick={handleNextTenSeconds}>
                <IoIosRefresh size={28} />
                <span>10</span>
              </button>
            </div>
            <div className="controlVideo">
              <Switch
                title="Autoplay"
                value={autoPlay}
                onClick={handleAutoPlay}
              />
              <button type="button" onClick={handleShowLessons}>
                <BiRectangle size={24} />
              </button>
            </div>
          </Controls>
        </CurrentLesson>
        <Lessons style={animateLesson}>
          <div className="lessons">
            <h2>Aulas</h2>
          </div>
          {track?.lessons.map((lesson, index) => (
            <Lesson
              key={lesson.id}
              current={currentLesson?.id === lesson.id}
              completed={lesson.completed}
            >
              <Status>
                <div
                  className="ball"
                  onClick={() => handleChangeCompleted(lesson)}
                />
                {track.lessons.length - 1 === index ? null : (
                  <div className="line" />
                )}
              </Status>
              <h4 onClick={() => handleChangeLesson(lesson)}>{lesson.title}</h4>
            </Lesson>
          ))}
        </Lessons>
      </Content>

      <Description>
        <h1>Descrição</h1>

        <div>
          <p>{currentLesson?.description}</p>
        </div>
      </Description>
    </Container>
  );
};

export default Track;
