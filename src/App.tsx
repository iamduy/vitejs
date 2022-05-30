import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@config';
import { IRoute } from '@types';
const App: React.FC = (props) => {
  console.log(import.meta.env);
  const isLoggedIn = false;
  const printRoutes = (routes: IRoute[]) => {
    return routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.element name={route.name} {...props} {...route.props} />}
      />
    ));
  };
  return (
    <BrowserRouter>
      <Routes>{printRoutes(isLoggedIn ? privateRoutes : publicRoutes)}</Routes>
    </BrowserRouter>
  );
};

export default App;
