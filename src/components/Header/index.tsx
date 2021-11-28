import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSprings } from 'react-spring';

import { Container, ButtonRoute } from './styles';

const routes = [
  {
    id: 1,
    title: 'Home',
    route: '/home',
  },
  {
    id: 2,
    title: 'Jornada',
    route: '/journey',
  },
  {
    id: 1,
    title: 'Ranking',
    route: '/ranking',
  },
];

export const Header: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const animateRoutes = useSprings(
    routes.length,
    routes.map(({ route }) => ({
      color: pathname === route ? '#4cc9f0' : '#ffd60a',
      backgroundColor: pathname === route ? '#14213d' : 'transparent',
    })),
  );

  return (
    <Container>
      {animateRoutes.map((styles, index) => (
        <ButtonRoute
          key={routes[index].id}
          type="button"
          style={styles}
          onClick={() => history.push(routes[index].route)}
        >
          {routes[index].title}
        </ButtonRoute>
      ))}
    </Container>
  );
};
