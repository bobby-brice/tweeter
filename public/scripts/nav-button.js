/* eslint-disable no-undef */
$(document).ready(function() {
  //Function to capture the char counter in the tweet output
  $('.nav-btn').click(function() {
    if ($('.new-tweet').is(':hidden')) {
      $('.new-tweet').slideDown("slow");
      $('#tweet-text').focus();
    } else {
      $('.new-tweet').slideUp("slow");
    }
  });
});
