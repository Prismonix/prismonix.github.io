import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'
import SignUp from './signup'
import Home from './home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
