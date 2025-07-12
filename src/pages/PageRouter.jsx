import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home.jsx';
import About from './About';      
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const pageRouter = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
    
  );
}

export default pageRouter;
