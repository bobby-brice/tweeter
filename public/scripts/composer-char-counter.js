/* eslint-disable no-undef */
$(document).ready(function() {

  // $('textarea').keyup(function() {
  //   const maxLength = 140;
  //   let length = $(this).val().length;
  //   length = maxLength - length;
  //   if (length < 0) {
  //     $('.counter').text(length).css('color', "red");
  //   } else {
  //     $('.counter').text(length).css('color', '#545149');
  //   }
  // });

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
