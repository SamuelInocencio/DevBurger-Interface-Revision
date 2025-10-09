import { createBrowserRouter } from 'react-router-dom';

import { Home, Login, Register } from '../containers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>{<Home />}</>,
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
