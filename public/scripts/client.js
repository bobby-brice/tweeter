/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function() {
 
  const renderTweets = function(tweets) {
    $.each(tweets, (index, tweet) => {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
      $('#tweet-container').prepend(createTweetElement(index, tweet));
    });
  };

  const createTweetElement = function(index, tweet) {
  
    let $tweet = `
    
      <article class="user-tweets">

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

  $('form').on('submit', function(event) {
    event.preventDefault();
    const url = `/tweets/`;
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url,
      data
    })
      .then((res) => { //after a succesful ajax call -> loadTweets which calls the get request again
        loadTweets();
      }).fail((err) => console.log(err));

    $('#tweet-text').val(""); //removes the tweet field
  });

  const loadTweets = () => {
    const url = `/tweets/`;

    $.ajax({
      method: 'GET',
      url,
      dataType: 'JSON'
    }).then((data) => {
      console.log(data);
      $('#tweet-container').empty(); //removes duplicate tweet data
      renderTweets(data);
    }).fail((err) => console.log(err));
  };

  //makes our initial GET request to load tweets from the db
  loadTweets();
});
