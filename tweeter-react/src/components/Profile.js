import React from 'react'
import './Navigation.css';
import './Profile.css';
import './Navigation.css';
import './TweetForm.css';

export const Profile = () => {

  return (
  <header className="main-header" id="main-header">
      <picture>
        <source srcSet="/villianSmall.png" media="(max-width: 400px)" alt="avatar" />
        <img src="/villian.png" alt="storm trooper"/>
      </picture>
      <br />
      <div>
        <h2>Bobby Brice</h2>
      </div>
    </header>
    )
}

