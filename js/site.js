$(document).ready(function() {

  function addButtonSelectedState(selector) {
    $('.buttons li').removeClass('salmon');
    $(selector).addClass('salmon');
  }

  function generateIpsum(paragraphCount, sentenceCount){
    $.getJSON('sentences.json',
      function(data) {
        var arr = _.shuffle(data);
        var output = '';
        for (var p=0; p < paragraphCount; p++) {
          var firstSentences = _.first(arr, sentenceCount);
          arr = _.rest(arr, sentenceCount);
          console.log(arr);          
          output = output + '<p>' + firstSentences.join(' ') + '</p>';
        }
        $('.text').html(output);
    });
  }

  function toggleIpsum(selector, paragraphCount, sentenceCount) {
    $(selector).on('click', function() {
      addButtonSelectedState(selector)
      generateIpsum(paragraphCount, sentenceCount);
    })
  }

  toggleIpsum('.short', 1, 8);
  toggleIpsum('.medium', 3, 5);
  toggleIpsum('.long', 5, 5);
});
