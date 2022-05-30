import { privateRoutes, publicRoutes } from '@config';
import PrivateLayout from '@templates/private';
import PublicLayout from '@templates/public';
import { IRoute } from '@types';
import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = (props) => {
  console.log(import.meta.env);
  const isAuth = null;
  const printRoutes = (routes: IRoute[]) => {
    return (
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.element name={route.name} {...props} {...route.props} />}
          />
        ))}
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      {isAuth ? (
        <PrivateLayout>{printRoutes(privateRoutes)}</PrivateLayout>
      ) : (
        <PublicLayout>{printRoutes(publicRoutes)}</PublicLayout>
      )}
    </BrowserRouter>
  );
};

export default App;
