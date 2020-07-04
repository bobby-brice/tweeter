import React from 'react'
import './Navigation.css';
import './Profile.css';
import './Navigation.css';
import './TweetForm.css';

export const Tweet = (props) => {

  const {name, handle, profile_image, text, date} = props;

  return(
    <section id="tweet-container">
      <article className="user-tweets">
        <header className="tweet-header">
          <div className="header-top">
            <img src={profile_image} alt="avatar"/>
            <p className="user-name">{name}</p>
          </div>  
          <div className="user-handle">
            <p className="handle">{handle}</p>
          </div>
        </header>
          <p>{text}</p>
          <footer className="tweet-footer">
            <p>{date}</p>
            <div className="icons">
              <i className="fas fa-flag"></i>
              <i className="fas fa-retweet"></i>
              <i className="fas fa-heart"></i>
            </div>
          </footer>
        </article>
    </section>    
      )
}