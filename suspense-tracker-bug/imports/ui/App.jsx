import React, { Suspense } from 'react';
import { Hello } from './Hello.jsx';
import { useSubscribe } from 'meteor/react-meteor-data/suspense';
import { Info } from './Info.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from './404.jsx';
import { Navbar } from './Navbar.jsx';
import { Reactivity } from './Reactivity.jsx';

export const App = () => {
  useSubscribe('links');
  useSubscribe('tasks');
  useSubscribe('fruits');
  useSubscribe('powerups');
  useSubscribe('posts');
  useSubscribe('comments');

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Info /></Suspense>} />
        <Route path="/counter" element={<Hello />} />
        <Route path="/reactivity" element={<Suspense fallback={<div>Loading...</div>}><Reactivity /></Suspense>} />
        <Route path="*" element={< NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
