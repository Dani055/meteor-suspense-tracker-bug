import React, { Suspense } from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from './404.jsx';
import { Navbar } from './Navbar.jsx';

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Info /></Suspense>} />
      <Route path="/counter" element={<Hello />} />
      <Route path="*" element={< NotFound />} />
    </Routes>
  </BrowserRouter>
);
