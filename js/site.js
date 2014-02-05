$(document).ready(function() {
  function hideAll() {
      $( ".short-text, .medium-text, .long-text" ).hide();
      $( ".short, .medium, .long" ).css( "color", "black" );
  }

  $( ".short" ).click(function() {
      hideAll();
      $( ".short-text" ).css( "display", "block" );
      $( ".short" ).css( "color", "salmon" );

  });
  $( ".medium" ).click(function() {
      hideAll();
      $( ".medium-text" ).css( "display", "block" );
      $( ".medium" ).css( "color", "salmon" );
  });
    $( ".long" ).click(function() {
      hideAll();
      $( ".long-text" ).css( "display", "block" );
      $( ".long" ).css( "color", "salmon" );
  });
});

// We want to build paragraphs (by randomly choosing
// 3-7 sentences from sentences.json), and then after
// each paragraph include a line break.