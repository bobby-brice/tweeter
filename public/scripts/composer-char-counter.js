/* eslint-disable no-undef */
$(document).ready(function() {
  //Function to capture the char counter in the tweet output
  $('textarea').keyup(function() {
    const maxLength = 140;
    let length = $(this).val().length;
    length = maxLength - length;

    let counterOutput = $(this)
      .closest('.new-tweet')
      .find('.counter').text(length);
    
    if (length < 0) {
      counterOutput.css('color', "red");
    } else {
      counterOutput.css('color', '#545149');
    }

  });
});


