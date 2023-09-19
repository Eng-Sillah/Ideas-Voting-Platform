import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../components/config/firebase-config';
import './Navsbar.css';

function Navsbar() {
  const [user, setUser] = useState(null);
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

  return (
    <div className='navbar-container'>
      <div className='logo-search-div'>
        <h2>Logo</h2>
        <input type='text' placeholder='Search idea' />
      </div>
      <nav className='navs'>
        <ul>
          <li>
            <Link to='./' activeclassname='active'>
              Home
            </Link>
          </li>
          <li>
            <button onClick={handleSubmitIdea}>Submit Idea</button>
          </li>
          <li>
            {user ? (
              <>
                <button onClick={handleLogout} className='logout'>Logout</button>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt='User Avatar'
                    className='user-avatar'
                  />
                )}
              </>
            ) : (
              <NavLink to='/login' activeclassname='active'>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navsbar;
