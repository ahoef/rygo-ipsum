$(document).ready(function() {
  function makeBlack() {
      $( ".short, .medium, .long" ).css( "color", "black" );
  }

  function makePink(selector) {
    $(selector).css("color", "salmon");
  }

  function generateIpsum(paragraphCount, sentenceCount){
    $.getJSON("sentences.json",
      function(data) {
        var arr = _.shuffle(data);
        var output = '';
        for (var p=0; p < paragraphCount; p++) {
          var firstSentences = _.first(arr, sentenceCount);
          arr = _.rest(arr, sentenceCount);          
          output = output + "<p>" + firstSentences.join(" ") + "</p>";
        }
        $('.text').html(output);
    });
  }

  function toggleIpsum(selector, paragraphCount, sentenceCount) {
    $(selector).on('click', function() {
      makeBlack();
      makePink(selector);
      generateIpsum(paragraphCount, sentenceCount);
    })
  }

  toggleIpsum('.short', 1, 8);
  toggleIpsum('.medium', 3, 5);
  toggleIpsum('.long', 5, 5);
});
