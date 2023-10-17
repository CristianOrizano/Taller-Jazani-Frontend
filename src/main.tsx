
import ReactDOM from 'react-dom/client'

import '@popperjs/core';
import 'bootstrap';

import './core/styles/app.scss';

import { RouterProvider } from 'react-router-dom'
import router from './core/router'



ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
  )
