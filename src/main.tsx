import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Helmet} from "react-helmet";
import './index.css'
import App from './App.tsx'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const router = createBrowserRouter([
  {
    "path": "/*",
    "element": <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Helmet>
      <RouterProvider router={router} />
    </Helmet>
  </StrictMode>,
)
