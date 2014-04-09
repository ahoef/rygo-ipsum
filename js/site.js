$(document).ready(function() {
  function hideAll() {
      $( ".short, .medium, .long" ).css( "color", "black" );
  }



  $( ".short" ).click(function() {
      hideAll();
      $( ".short" ).css( "color", "salmon" );
      generateIpsum(1, 4);

  });
  $( ".medium" ).click(function() {
      hideAll();
      $( ".medium" ).css( "color", "salmon" );
      generateIpsum(3, 3);
  });
    $( ".long" ).click(function() {
      hideAll();
      $( ".long" ).css( "color", "salmon" );
      generateIpsum(5, 3);
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
