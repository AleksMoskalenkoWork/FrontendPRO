import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import Root from './pages/Root.jsx';
import ErrorPage from './pages/404.jsx';
import TodoPage from './pages/TodoPage.jsx';
import SwapiPage from './pages/SwapiPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import store from './features/store.js';
import theme from './theme/theme.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'todo', element: <TodoPage /> },
      { path: 'swapi', element: <SwapiPage /> },
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
