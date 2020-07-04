import React, { useState } from 'react';

import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from "./components/Tweet";

const initialTweetData = [
  {
    name: "Bobby Brice",
    handle: "@StayGolden",
    profile_image: "https://i.imgur.com/2WZtOD6.png",
    text: "What do you think about dragons?",
    date: "10 days ago"
  }
]

function App()  {
  const [tweetData, setTweetData] = useState(initialTweetData
    )
  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} profile_image={tweetData.profile_image} text={tweetData.text} date={tweetData.date} />
  })

  const addTweet = (text) => {
    const newTweet = {
      name: "Bobby Brice",
        handle: "@StayGolden",
        profile_image: "https://i.imgur.com/2WZtOD6.png",
        text,
        date: "5 days ago"
    }
    setTweetData([newTweet, ...tweetData])
  }
  
    return (
      <div className="App">
        <Navigation />
        <div className="primary-container">
          <Profile />
          <main className="container">
            <TweetForm addTweet={addTweet} />
            {tweets}
          </main>
        </div>  
      </div>
    );
}

export default App;
