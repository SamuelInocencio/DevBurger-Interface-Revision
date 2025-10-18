import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components';
import { Home, Login, Menu, Register } from '../containers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Menu />
      </>
    ),
  },
]);
