$(document).ready(function() {
  function hideAll() {
      $( ".short, .medium, .long" ).css( "color", "black" );
  }

  function makePink(selector) {
    $(selector).css("color", "salmon");
  }

  $( ".short" ).click(function() {
      hideAll();
      makePink('.short');
      generateIpsum(1, 8);

  });
  $( ".medium" ).click(function() {
      hideAll();
      makePink('.medium');
      generateIpsum(3, 5);
  });
    $( ".long" ).click(function() {
      hideAll();
      makePink('.long');
      generateIpsum(5, 5);
  });

  function generateIpsum(paragraphCount, sentenceCount){
    $.getJSON("sentences.json",
      function(data) {
        var arr = _.shuffle(data);
        var output = '';
        for (var p=0; p < paragraphCount; p++) {
          var firstSentences = _.first(arr, sentenceCount);
          var arr = _.rest(arr, sentenceCount);
          output = output + "<p>" + firstSentences.join(" ") + "</p>";
        }
        $('.text').html(output);
    });
  }
});
