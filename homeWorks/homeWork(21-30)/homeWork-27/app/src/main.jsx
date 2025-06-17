import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import Root from './pages/Root.jsx';
import ErrorPage from './pages/404.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { TasksProvider } from './context/TodoContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </ThemeProvider>
  </StrictMode>
);
