$(document).ready(function() {

  $('.new-tweet').hide(); //hides the inital tweet box
 
  const renderTweets = function(tweets) {
    $.each(tweets, (index, tweet) => {
    // loops through tweets, calls createTweetElement for each tweet, appends it to the tweets container
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
            <p class="user-name">${tweet['user'].name}</p>
          </div>  
            <div class="user-handle">
              <p class="handle">${tweet['user'].handle}</p>
            </div>
        </header>

        <p>${escape(tweet['content'].text)}</p>

        <footer class="tweet-footer">
          <p>${moment(tweet['created_at'], "").fromNow()}</p>
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

  //helper function to provide tweet validation
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
      input.text("❗Exceeded maximum characters ❗");
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
        .then(() => { //after a succesful ajax call -> loadTweets which calls the get request again
          loadTweets();
          $('.counter').text("140"); //reset the counter chars to 140
        }).fail((err) => console.log(err));

      $('#tweet-text').val(""); //removes the tweet field

    }
  });

  //loadTweets is called in the POST request triggering the below GET request to render new tweets
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
