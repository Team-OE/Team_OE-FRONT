import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundView from './pages/NotFoundView';
import HomeView from './pages/HomeView';
import PostView from './pages/PostView';
import PostListView from './pages/PostListView';
import AlertView from './pages/user/AlertView';
import LoginView from './pages/auth/LoginView';
import AddPostView from './pages/user/AddPostView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundView />,
    children: [
      { index: true, path: '/', element: <HomeView /> },
      { path: '/board/:board_id', element: <PostView /> },
      { path: '/boardList', element: <PostListView /> },
      { path: '/alert/:user_id', element: <AlertView /> },
      { path: '/login', element: <LoginView /> },
      { path: '/addPost', element: <AddPostView /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
