import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import SAQ from './SAQ';

function App() {
  return (
    <div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 py-5 sm:py-5 md:py-10 lg:py-10 xl:py-10 w-screen bg-stone-200 text-stone-950">
      <Router>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/saq" element={<SAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
