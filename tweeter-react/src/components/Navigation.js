import React from 'react'
import './Navigation.css';
import './Profile.css';
import './Navigation.css';
import './TweetForm.css';

export const Navigation = () => {
  return (
    <nav className="nav">
      <span className="logo">tweeter</span>
      <span className="nav-btn"><button><strong>Write</strong> a new tweet <i className="fas fa-angle-double-down"
        id="arrow-down"></i></button></span>
    </nav>
  )
}