$(document).ready(function(){
  //Variable to keep track of previous color
  var prevColor;

  //Keep track if animating
  var animating = false;

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

//Pick a new color for background
function randomColor(){

  var color1 = "#77e1ff";
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
      $('#projects').hide(0, $('#welcome').show());
      $('#projectsItem').removeClass('selectedMenu');
      $('#welcomeItem').addClass('selectedMenu');
    }
  else if($('#welcome').css('display')!='none'){
      $('#welcome').hide(0, $('#about').show());
      $('#welcomeItem').removeClass('selectedMenu');
      $('#aboutItem').addClass('selectedMenu');
    }
  else if($('#about').css('display')!='none'){
      $('#about').hide(0, $('#skills').show());
      $('#aboutItem').removeClass('selectedMenu');
      $('#skillsItem').addClass('selectedMenu');
    }
  else if($('#skills').css('display')!='none'){
      $('#skills').hide(0, $('#projects').show());
      $('#skillsItem').removeClass('selectedMenu');
      $('#projectsItem').addClass('selectedMenu');
    }
}

//Go to previous page
function changeViewUp(){
  if($('#projects').css('display')!='none'){
      $('#projects').hide(0,$('#skills').show());
      $('#projectsItem').removeClass('selectedMenu');
      $('#skillsItem').addClass('selectedMenu');
    }
  else if($('#welcome').css('display')!='none'){
      $('#welcome').hide(0, $('#projects').show());
      $('#welcomeItem').removeClass('selectedMenu');
      $('#projectsItem').addClass('selectedMenu');
    }
  else if($('#about').css('display')!='none'){
      $('#about').hide(0, $('#welcome').show());
      $('#aboutItem').removeClass('selectedMenu');
      $('#welcomeItem').addClass('selectedMenu');
    }
  else if($('#skills').css('display')!='none'){
      $('#skills').hide(0, $('#about').show());
      $('#skillsItem').removeClass('selectedMenu');
      $('#aboutItem').addClass('selectedMenu');
    }
}

//Scroll change view
$(document).mousewheel(function(event, delta){
  if(!animating){
    animating = true;
    if(delta > 0){
      changeEntireViewUp();
    }
    else if(delta < 0){
      changeEntireViewDown();
    }
    animating = false;
  }
});

//Make things selected
$(function() {
    $('#contentItems il').click(function() {
            $(this).siblings().removeClass('selectedMenu');
            $(this).addClass('selectedMenu');
    });
});

});
