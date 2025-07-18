import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './Home.jsx';
import LegalMentions from './LegalMentions.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';

const PageRouter = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/legal-mentions" element={<LegalMentions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
    </Routes>
    
  );
}

export default PageRouter;
