import { getAccessToken } from "@helpers";
import PrivateLayout from "@templates/Private";
import PublicLayout from "@templates/Public";
import React, { useCallback } from "react";
import { Route, Routes as RoutesWrapper, useLocation } from "react-router-dom";
import { RoutesConfig } from "./routesConfig";

const Routes = ({ ...rest }) => {
  const location = useLocation();
  const isAuth = getAccessToken();

  const route = useCallback(() => {
    return ["", null, undefined].includes(isAuth) ? (
      <Route path="/" element={<PublicLayout />}>
        {RoutesConfig.public.map((route, index) => (
          <Route
            {...rest}
            key={index}
            path={route.path}
            element={
              <route.element name={route.name} {...rest} {...route.props} />
            }
          />
        ))}
      </Route>
    ) : (
      <Route path="/" element={<PrivateLayout />}>
        {RoutesConfig.private.map((route, index) => (
          <Route
            {...rest}
            key={index}
            path={route.path}
            element={
              <route.element name={route.name} {...rest} {...route.props} />
            }
          />
        ))}
      </Route>
    );
  }, [isAuth, location.pathname]);

  return <RoutesWrapper>{route()}</RoutesWrapper>;
};

export default Routes;
