import React from 'react';
import { Link } from 'react-router-dom';


function LogicLab() {
  return (
      <div className='links'>
          <Link to="/LogicLab/Sum"> Sum </Link>
          <Link to="/LogicLab/Sub"> Sub </Link>
          <Link to="/LogicLab/Mul"> Mul </Link>
          <Link to="/LogicLab/Div"> Div </Link>
      </div>
  )
}

export default LogicLab