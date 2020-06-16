/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
},
{
  "user": {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd"
  },
  "content": {
    "text": "Je pense , donc je suis"
  },
  "created_at": 1461113959088
}
];


  
const renderTweets = function(tweets) {
  $.each(tweets, (index, tweet) => {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('#tweet-container').append(createTweetElement(index, tweet));
  });
};

const createTweetElement = function(index, tweet) {
  console.log("index: ", index, "tweet: ", tweet);
  let $tweet = `
    
      <article>

        <header class="tweet-header">
          <div class="header-top">
            <img src=${tweet['user'].avatars}>
            <p class="handle">${tweet['user'].handle}</p>
          </div>
        </header>

        <p>${tweet['content'].text}</p>

        <footer class="tweet-footer">
          <p>${tweet['created_at']}</p>
          <div class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>

      </article>
   `;
  return $tweet;
};

$(document).ready(function() {
  renderTweets(data);
});
