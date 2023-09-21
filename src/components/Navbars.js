import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../components/config/firebase-config';
import './Navsbar.css';

function Navbar({ onSearch }) {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Add a Firebase authentication state change listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Unsubscribe the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSubmitIdea = () => {
    if (user) {
      // User is logged in, navigate to the "Submit Idea" page
      navigate('/submitIdea');
    } else {
      // User is not logged in, redirect to the login page
      navigate('/login');
    }
  };

  const handleSearch = () => {
    // Call the onSearch function passed from the parent component (App.js)
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    // Update the search query state as the user types
    setSearchQuery(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    // Trigger search when the Enter key is pressed
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Clear the filter and search query when clicking the Home button
  const handleHomeClick = () => {
    setSearchQuery('');
    onSearch('');
  };
  return (
    <div className='navbar-container'>
      <div className='logo-search-div'>
        <h2>Logo</h2>
        <input
          type='text'
          placeholder='Search idea'
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
        />
      </div>
      <nav className='navs'>
        <ul>
          <li>
            <Link to='./' activeClassName='active' onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li>
            <button onClick={handleSubmitIdea}>Submit Idea</button>
          </li>
          <li>
            {user ? (
              <>
                <button onClick={handleLogout} className='logout'>
                  Logout
                </button>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt='User Avatar'
                    className='user-avatar'
                  />
                )}
              </>
            ) : (
              <NavLink to='/login' activeClassName='active'>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
