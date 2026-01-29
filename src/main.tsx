import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    <RouterProvider router={router} />
  </StrictMode>,
)
