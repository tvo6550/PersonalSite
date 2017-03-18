$(document).ready(function(){

  $("#mainBody").css("background-color", randomColor());

  $(document).scroll(function() {
    var test = randomColor();
    $("#mainBody").css("background-color", test);
});

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        changeEntireView()
        break;

        case 38: // up
        changeEntireView()
        break;

        case 39: // right
        changeEntireView()
        break;

        case 40: // down
        changeEntireView()
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function changeEntireView(){
  changeColor();
  changeView();
}

function changeColor(){
  $("#mainBody").css("background-color", randomColor());
}
function randomColor(){

  var color1 = "#A5EBFF";
  var color2 = "#F4CE97";
  var color3 = "#E56967";
  var color4 = "#79C694";
  var color5 = "#EFAACA";
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

  if(colorChoice == hexc($("#mainBody").css("background-color")))
    colorChoice = randomColor();

  return colorChoice;
}

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
}

function changeView(){
  if($('#welcome').css('display')=='none' && $('#about').css('display')=='none'){
      $('#welcome').show().siblings('div').hide();
    }
  else if($('#welcome').css('display')=='none' && $('#projects').css('display')=='none'){
      $('#projects').show().siblings('div').hide();
    }
  else if($('#about').css('display')=='none' && $('#projects').css('display')=='none'){
      $('#about').show().siblings('div').hide();
    }
}
});
