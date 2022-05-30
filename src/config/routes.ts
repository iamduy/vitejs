import { IRoute } from '@types';
import HomePage from '@pages/Auths/Home';
import UsersManage from '@pages/Auths/Users';
import Login from '@pages/UnAuths/Login';
import Register from '@pages/UnAuths/Register';
const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    element: HomePage,
  },
  {
    path: '/users',
    name: 'Users Page',
    element: UsersManage,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    element: HomePage,
  },
  {
    path: '/users',
    name: 'Users Page',
    element: UsersManage,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Login Page',
    element: Login,
  },
  {
    path: '/login',
    name: 'Login Page',
    element: Login,
  },
  {
    path: '/register',
    name: 'Register Page',
    element: Register,
  },
];

export default routes;
