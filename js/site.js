$(document).ready(function() {

  /**
  * Remove any existing selected states, and change a button's text color to 
  pink if it was clicked 
  * @param {string} selector - DOM element that triggers event
  */
  function addButtonSelectedState(selector) {
    $('.buttons li').removeClass('salmon');
    $(selector).addClass('salmon');
  }

  /**
  * Create a block of text with random sentence order. Its length is determined
  * by the value of the paragraph & sentence params 
  * @param {number} paragraphCount - number of paragraphs generated
  * @param {number} sentenceCount - number of sentences generated in each paragraph
  */
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

  /**
  * Attach an event listener that calls functions to change a button's 
  * selected state & generate the text block
  * @param {string} selector - DOM element that triggers event
  * @param {number} paragraphCount - number of paragraphs generated
  * @param {number} sentenceCount - number of sentences generated in each paragraph
  */
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
