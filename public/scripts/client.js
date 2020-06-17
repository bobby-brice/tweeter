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
    const escape = function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    let $tweet = `
    
      <article class="user-tweets">

        <header class="tweet-header">
          <div class="header-top">
            <img src=${tweet['user'].avatars}>
            <p class="handle">${tweet['user'].handle}</p>
          </div>
        </header>

        <p>${escape(tweet['content'].text)}</p>

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

  // eslint-disable-next-line func-style
  const validateTweet = function() {
    let tweetVal = $('#tweet-text').val();
    const maxLength = 140;
    
    let success = false;

    if (tweetVal === null || tweetVal === "") {
      const input = $('.new-tweet h5');
      input.text("❗Please provide some text ❗");
      input.addClass('validation');
      input.slideDown('slow');
    
    } else if (tweetVal.length > maxLength) {
      const input = $('.new-tweet h5');
      input.text("❗You have exceeded the maximum number of characters ❗");
      input.addClass('validation');
      input.slideDown('slow');

    } else {
      success = true;
      const input = $('.new-tweet h5');
      input.text("");
      input.removeClass('validation');
    }

    return success;
  };

  $('form').on('submit', function(event) {
    event.preventDefault();
    if (validateTweet()) {
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

    }
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
