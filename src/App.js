import React from 'react';
import PageRouter from './pages/PageRouter';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <PageRouter />
      <ScrollToTopButton />
    </div>
  );
}
  
export default App;
