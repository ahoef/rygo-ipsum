$(document).ready(function() {
  $( ".short" ).click(function() {
      $( ".medium-text" ).css( "display", "none" );
      $( ".long-text" ).css( "display", "none" );
      $( ".short-text" ).css( "display", "block" );
      $( ".short" ).css( "color", "salmon" );
      $( ".medium" ).css( "color", "black" );
      $( ".long" ).css( "color", "black" );
  });
  $( ".medium" ).click(function() {
      $( ".short-text" ).css( "display", "none" );
      $( ".long-text" ).css( "display", "none" );
      $( ".medium-text" ).css( "display", "block" );
      $( ".medium" ).css( "color", "salmon" );
      $( ".short" ).css( "color", "black" );
      $( ".long" ).css( "color", "black" );

  });
    $( ".long" ).click(function() {
      $( ".short-text" ).css( "display", "none" );
      $( ".medium-text" ).css( "display", "none" );
      $( ".long-text" ).css( "display", "block" );
      $( ".long" ).css( "color", "salmon" );
      $( ".medium" ).css( "color", "black" );
      $( ".short" ).css( "color", "black" );
  });
});