import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './pages/Root.jsx';
import ErrorPage from './pages/404.jsx';
import HomePage from './pages/HomePage.jsx';
import './index.css';
import AboutPage from './pages/AboutPage.jsx';
import HotelsPage from './pages/HotelsPage.jsx';
import theme from './theme/theme.js';
import store from './features/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'hotels', element: <HotelsPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
