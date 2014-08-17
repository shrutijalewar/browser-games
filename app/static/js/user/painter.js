(function(){
  'use strict';

  $(document).ready(function(){
    $('button').click(addColor);
    $('#colors').on('click', '.color', selectColor);
    $('#canvas').on('mouseenter', '.pixel', paintPixel);
    makeCanvas();

  });

  function paintPixel(){
    var color = $('#selected').css('background-color');
    $(this).css('background-color', color);
  }

  function makeCanvas(){
    for(var i=0; i < 50000; i++){
      var $pixel = $('<div>');
      $pixel.addClass('pixel');
      $('#canvas').append($pixel);
    }
  }
  function selectColor(){
    var color = $(this).css('background-color');
    $('#selected').css('background-color', color);
  }
  function addColor(){
    var $color = $('<div>'),
          color = $('#controls > input').val();
    $color.addClass('color');
    $color.css('background-color', color);
    $('#colors').append($color);
  }
})();
