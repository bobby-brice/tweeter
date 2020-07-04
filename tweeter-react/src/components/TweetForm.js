import React, {useState} from 'react'
import './Navigation.css';
import './Profile.css';
import './Navigation.css';
import './TweetForm.css';

export const TweetForm = (props) => {
  const {addTweet} = props
  const [tweetText, setTweetText] = useState("")
  const tweetRemainingLength = 140 - tweetText.length
  const outputStyle = {color: tweetRemainingLength >= 0 ? "#545149" : "red"}

  const submitTweet = event => {
    event.preventDefault();
    if (tweetRemainingLength >=0 && tweetRemainingLength < 140) {
      addTweet(tweetText)
      setTweetText("")
    }
  }

  return(
      <section className="new-tweet">
        <h5></h5>
        <form onSubmit={submitTweet} className="form-top" action="/tweets/" method="POST" name="tweet-text">
          <label for="tweet-text">What are you humming about?</label>
          <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text"></textarea>
          <div className="below-form">
            <button className="tweet-btn" type="submit">Tweet</button>
            <output style={outputStyle} name="counter" className="counter" for="tweet-text">{ 140 - tweetText.length }</output>
          </div>
        </form>
      </section>
      )
};