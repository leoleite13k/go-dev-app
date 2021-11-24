import React, { useEffect } from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRoute extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({
  isPrivate = false,
  component: Component,
  path,
  ...rest
}) => {
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (isPrivate && !!user && !user.profile) {
      history.push('/avatar');
    }
  }, [history, isPrivate, user]);

  useEffect(() => {
    if (path === '/avatar' && !!user && !!user.profile) {
      history.push('/');
    }
  }, [history, path, user]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
