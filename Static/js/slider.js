$(function() {
    $( ".islider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#iamount" ).val(ui.value );
      }
    });
    $( "#iamount" ).val($( ".islider" ).slider( "value" ) );
  });

	$(function() {
    $( ".pslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#pamount" ).val(ui.value );
      }
    });
    $( "#pamount" ).val($( ".pslider" ).slider( "value" ) );
  });

	$(function() {
    $( ".mslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#mamount" ).val(ui.value );
      }
    });
    $( "#mamount" ).val($( ".mslider" ).slider( "value" ) );
  });

	$(function() {
    $( ".cslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#camount" ).val(ui.value );
      }
    });
    $( "#camount" ).val($( ".cslider" ).slider( "value" ) );
  });

	$(function() {
    $( ".rslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#ramount" ).val(ui.value );
      }
    });
    $( "#ramount" ).val($( ".rslider" ).slider( "value" ) );
  });

$(function() {
    $( ".fslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#famount" ).val(ui.value );
      }
    });
    $( "#famount" ).val($( ".fslider" ).slider( "value" ) );
  });

$(function() {
    $( ".phslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#phamount" ).val(ui.value );
      }
    });
    $( "#phamount" ).val($( ".phslider" ).slider( "value" ) );
  });

$(function() {
    $( ".dslider" ).slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#damount" ).val(ui.value );
      }
    });
    $( "#damount" ).val($( ".dslider" ).slider( "value" ) );
  });
