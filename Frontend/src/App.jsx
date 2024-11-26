import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';  // Correct path for Home
import About from './components/about/Abouts';  // Correct path for About
import Products from './components/Products';  // Correct path for Products

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
