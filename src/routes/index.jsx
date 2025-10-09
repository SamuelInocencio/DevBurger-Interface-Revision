import { createBrowserRouter } from 'react-router-dom';

import { Login, Register } from '../containers/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>{/* <Home /> */}</>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
]);
