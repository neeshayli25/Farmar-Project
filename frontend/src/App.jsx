import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import login from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/"  element={<h1>holllllllla</h1>}  />
        <Route path="/login" element={<login/>}/>
      </Routes>
   </Router>
  )
}

export default App
