import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Resources from './routes/ResourcesPage'
import About from './routes/AboutPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/about" element={<About />} />
    </Routes>
  
  </BrowserRouter>
);