import React, { useEffect } from 'react';
import { Route as ReactDOMRoute, Redirect, useHistory } from 'react-router-dom';

import { DefaultLayout, AuthLayout } from '../pages/_layouts';
import { IRoute } from './interface';
import { useAuth } from '../hooks/auth';

const Route: React.FC<IRoute> = ({
  isPrivate = false,
  component: Component,
  path,
  ...rest
}) => {
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (isPrivate && !!user && !user?.profile) {
      history.push('/avatar');
    }
  }, [history, isPrivate, user]);

  useEffect(() => {
    if (path === '/avatar' && !!user && !!user?.profile) {
      history.push('/');
    }
  }, [history, path, user]);

  const Layout =
    isPrivate && !!user && !!user?.profile ? AuthLayout : DefaultLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <Layout>
            <Component />
          </Layout>
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
