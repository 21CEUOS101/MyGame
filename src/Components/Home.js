import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className='container'>
          <h1>Let's Have Some Fun</h1>
          
          <Link to="/LogicLab">Logic Lab</Link>
      </div>
  )
}

export default Home