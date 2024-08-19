import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from "./App"
import Home from "./components/Home/Home"
import Membership from "./components/Memberships/Membership"
import Contact from "./components/Contact/Contact"
import Sports from "./components/Sports/Sports"
import Features from "./components/Features/Features"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home />} />
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/features" element={<Features/>}/>
    </Route>
    
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
