$(document).ready(function(){
  //Randomize color at the beginning
  $("#mainBody").css("background-color", randomColor());

  //Change view on color
  $(document).scroll(function() {
    var test = randomColor();
    $("#mainBody").css("background-color", test);
});

  //On key press change view
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        changeEntireViewUp()
        break;

        case 38: // up
        changeEntireViewUp()
        break;

        case 39: // right
        changeEntireViewDown();
        break;

        case 40: // down
        changeEntireViewDown();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function changeEntireViewDown(){
  changeColor();
  changeViewDown();
}

function changeEntireViewUp(){
  changeColor();
  changeViewUp();
}

//Just to shorten the method call
function changeColor(){
  $("#mainBody").css("background-color", randomColor());
}

//Variable to keep track of previous color
var prevColor;

//Pick a new color for background
function randomColor(){

  var color1 = "#a5ebff";
  var color2 = "#f4ce97";
  var color3 = "#e56967";
  var color4 = "#79c694";
  var color5 = "#efaaca";
  var colorChoice;

  var chooseColor = Math.floor(Math.random() * 5) + 1;

  switch(chooseColor){
    case 1:
      colorChoice = color1;
    break;

    case 2:
      colorChoice = color2;
    break;

    case 3:
      colorChoice = color3;
    break;

    case 4:
      colorChoice = color4;
    break;

    case 5:
      colorChoice = color5;
    break;
  }

  if(colorChoice == prevColor)
    colorChoice = randomColor();

  prevColor = colorChoice;
  return colorChoice;
}

//Convert rgb into hex values
function hexc(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

//Go to next page
function changeViewDown(){
  if($('#projects').css('display')!='none'){
      $('#welcome').show();
      $('#projects').hide();
    }
  else if($('#welcome').css('display')!='none'){
      $('#about').show();
      $('#welcome').hide();
    }
  else if($('#about').css('display')!='none'){
      $('#projects').show();
      $('#about').hide();
    }
}

//Go to previous page
function changeViewUp(){
  if($('#projects').css('display')!='none'){
      $('#about').show();
      $('#projects').hide();
    }
  else if($('#welcome').css('display')!='none'){
      $('#projects').show();
      $('#welcome').hide();
    }
  else if($('#about').css('display')!='none'){
      $('#welcome').show();
      $('#about').hide();
    }
}


});
