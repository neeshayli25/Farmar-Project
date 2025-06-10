import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
