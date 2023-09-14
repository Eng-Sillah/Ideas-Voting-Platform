import React from 'react';
import "./Navsbar.css";


function Navsbar() {
  return (
    <div className='navbar-container'>
      <div className='logo-search-div'>
        <h2>Logo</h2>
        <input type='text' placeholder='Search idea' />
      </div>
      <nav className='navs'>
      <ul>
        <li>Home</li>
        <li>Submit Idea</li>
        <li>Sign In</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navsbar;


