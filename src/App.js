
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import LogicLab from './Components/LogicLab';
import Home from './Components/Home';
import Sum from './Components/Sum';
import Sub from './Components/Sub';
import Mul from './Components/Mul';
import Div from './Components/Div';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/LogicLab" element={<LogicLab />} />
          <Route path="/LogicLab/Sum" element={<Sum />} />
          <Route path="/LogicLab/Sub" element={<Sub />} />
          <Route path="/LogicLab/Mul" element={<Mul />} />
          <Route path="/LogicLab/Div" element={<Div />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
