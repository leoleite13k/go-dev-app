import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  layout?: JSX.Element;
}
