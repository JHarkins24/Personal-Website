import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Home/Navbar';
import Home from './pages/Home/Homescreeen';


function App() {
  return (
    <div className="App">  
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div> Absence of evidence is the evidence of absence</div>}></Route>
          </Routes>
        </div>
      </Router>
    {/* <Home /> */}
    </div>
   
  );
}

export default App;
