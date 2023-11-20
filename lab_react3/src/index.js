import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Catalog from './containers/Catalog/Catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/catalog',
    element: <Catalog />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<App />} />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
