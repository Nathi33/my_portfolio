import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './Home.jsx';

const PageRouter = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
        </Route>
    </Routes>
    
  );
}

export default PageRouter;
