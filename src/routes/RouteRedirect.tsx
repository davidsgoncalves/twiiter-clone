import React from 'react';
import { Route as ReactDOMRoute, RouteProps as ReactDOMRouteProps, Redirect } from 'react-router-dom';

/* import { useAuth } from '../hooks/auth'; */

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean | undefined;
  component: React.ComponentType;
}

const defaultProps = {
  isPrivate: false,
};

const RouteRedirect = ({ isPrivate = false, component: Component }: RouteProps) => {
  /* const { user } = useAuth(); */
  const user = false;

  return (
    <ReactDOMRoute
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: isPrivate ? '/' : '/dashboard',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

export default RouteRedirect;

RouteRedirect.defaultProps = defaultProps;
