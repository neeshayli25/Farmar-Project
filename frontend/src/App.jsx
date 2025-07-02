// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home'; // import the new HomePage
import Farmer from './Farmer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/farmer" element={<Login />} /> {/* Add this */}
        <Route path="/buyer" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farmer" element={<Farmer />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
