/* eslint-disable react/no-array-index-key */
import React, { useEffect, useCallback, useState } from 'react';
import { IoFootstepsOutline, IoFlagOutline } from 'react-icons/io5';

import api from '../../services/api';
import { LoadingJourney } from '../../components/Shimmer';
import NoJourney from './NoJourney';
import { IJourney } from './interface';
import { Container, Content, ContentInfo, Info, BoxInfo } from './styles';

const Journey: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [journey, setJourney] = useState<IJourney[]>([]);

  const getJourney = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/journey');

      setJourney(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getJourney();
  }, [getJourney]);

  if (isLoading) return <LoadingJourney />;

  if (journey.length === 0) return <NoJourney />;

  return (
    <Container>
      {journey.map(({ photoUrl, title, description, date }, index) => (
        <Content key={index}>
          <div className="item">
            {index === 0 ? (
              <IoFootstepsOutline
                size={62}
                color="#ffd60a"
                className="startIcon"
              />
            ) : (
              <img src={photoUrl} alt={title} />
            )}
          </div>
          <ContentInfo>
            <div className="line" />
            <Info>
              <div className="lineHorizontal" />
              <BoxInfo>
                <div className="info">
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <span>{date}</span>
                </div>
              </BoxInfo>
            </Info>
          </ContentInfo>
        </Content>
      ))}

      <div className="item">
        <IoFlagOutline size={62} color="#ffd60a" />
      </div>
    </Container>
  );
};

export default Journey;
