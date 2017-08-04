$(document).ready(function(){
  //Variable to keep track of previous color
  var prevColor;
  var darkTheme = false;

  //Keep track if animating
  var animating = false;

  //Randomize color at the beginning
  $("#mainBody").css("background-color", randomColor());

  //Change view color on scroll
  $(document).scroll(function() {
    var newColor = randomColor();
    $("#mainBody").css("background-color", newColor);
  });

  //Check if a class exists
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  //On key press change view
  $(document).keydown(function(e) {
    if(!animating){
      animating = true;
      switch(e.which) {
          case 32: // space
          if ($('#food').css('display')!='none') {
            refreshFeed();
          }
          break;
          case 37: // left
          findNextDisplay("up");
          break;

          case 38: // up
          findNextDisplay("up");
          break;

          case 39: // right
          findNextDisplay("down");
          break;

          case 40: // down
          findNextDisplay("down");
          break;

          case 68: //darkTheme
          if(darkTheme){
            darkTheme = false;
          }
          else {
            darkTheme = true;
          }
          changeColor();
          break;

          default:
          animating = false;
          return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
      setTimeout(function() {animating = false}, 300);
    }
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
  var color1, color2, color3, color4, color5;

  if (!darkTheme){
    color1 = "#81CEEA";
    color2 = "#f4c17a";
    color3 = "#e56967";
    color4 = "#79c694";
    color5 = "#efa2c6";
  }
  else{
    color1 = "#383838";
    color2 = "#383838";
    color3 = "#383838";
    color4 = "#383838";
    color5 = "#383838";
  }
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

  if(colorChoice == prevColor && !darkTheme)
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

//Change view when pressing on menu
$(".menuItem > a").click(function() {
        changeView($(this));
        return false;
    });

//This is the change view function that will be used mostly everywhere
function changeView(targetView){
  //Change color
  changeColor();
  //Switch the text style
  targetView.parent().siblings().removeClass('selectedMenu');
  targetView.parent().addClass('selectedMenu');
  targetView.children().addClass('fa-circle');
  targetView.children().removeClass('fa-circle-thin');
  targetView.parent().siblings().children().children().removeClass('fa-circle');
  targetView.parent().siblings().children().children().addClass('fa-circle-thin');

  //Change the view
  displayID = targetView.parent().attr('id');
  $(".displayDiv").hide(0);

  if(displayID == "welcomeItem")
    $("#welcome").show();
  else if(displayID == "aboutItem")
    $("#about").show();
  else if(displayID == "workItem")
    $("#work").show();
  else if(displayID == "projectsItem")
    $("#projects").show();
  else if(displayID == "skillsItem")
    $("#skills").show();
  else if(displayID == "foodItem")
    $("#food").show();
    else if(displayID == "foodItem")
      $("#food").show();
}

//Find next display
function findNextDisplay(direction){
  //Find current display
  var currentDisplay = $(".displayDiv:visible");
  var changeTo;
  var changeParam;

  currentDisplay.hide();

  //Determine direction and change view based on it.
  if(direction == "up"){
    changeTo = currentDisplay.prev();

    //At top of list already. Go to bottom
    if(changeTo.attr('id') == null)
      changeTo = $("#food");

  }
  else if(direction == "down"){
    changeTo = currentDisplay.next();

    //At bottom of list already. Go to top.
    if(changeTo.attr('id') == null)
      changeTo = $("#welcome");
  }
    //Determine which view to show. Have to pass in what to press
    if(changeTo.attr('id') == "welcome")
      changeView($(document.getElementById("welcomeItem").firstElementChild));
    else if(changeTo.attr('id') == "about")
      changeView($(document.getElementById("aboutItem").firstElementChild));
    else if(changeTo.attr('id') == "work")
      changeView($(document.getElementById("workItem").firstElementChild));
    else if(changeTo.attr('id') == "projects")
      changeView($(document.getElementById("projectsItem").firstElementChild));
    else if(changeTo.attr('id') == "skills")
      changeView($(document.getElementById("skillsItem").firstElementChild));
    else if(changeTo.attr('id') == "food")
      changeView($(document.getElementById("foodItem").firstElementChild));
}

//Scroll change view
$(document).mousewheel(function(event, delta){
  if(!animating){
    animating = true;

    //up and left
    if(delta > 0){
      findNextDisplay("up");
    }
    //down and right
    else if(delta < 0){
      findNextDisplay("down");
    }
    setTimeout(function() {animating = false}, 575);
  }
});

//Animation for welcome page
//Reference: http://codepen.io/anon/pen/VpQdBB
//Changed color to white
//Enlarged the shapes for emphasis
(function() {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2 - 25, y: height/2 - 20};

        welcome = document.getElementById('welcome');
        welcome.style.height = height+'px';

        canvas = document.getElementById('welcomeCanvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/15) {
            for(var y = 0; y < height; y = y + height/15) {
                var px = x + Math.random()*width/15;
                var py = y + Math.random()*height/15;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,4)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        welcome.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(255,255,255,'+ p.active+')';
            ctx.lineWidth = 3;
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

})();

//Max number of pictures
var maxImages = 1;
var foundImages = 0;
//Getting images from my instagram for a feed
var myFeed = new Instafeed({
        get: 'user',
        userId: '525605804',
        clientId: 'd658be27843b40dcba5f4c2f8f95b1a3',
        accessToken: '525605804.1677ed0.8ef2fe3068e44d74baddfde1907cf837',
        limit: '60',
        sortBy: 'random',
        success: function(){
          foundImages = 0;
        },
        filter: function(image) {
        if (image.tags.indexOf('foodforsite') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }
        return false;
        },
        template: '<div><a href="{{link}}" target="_blank"><img id="foodPic" src="{{image}}" style="border: 6px solid #ffffff;"/></div>',
        resolution: 'low_resolution'
    });
myFeed.run();

//Refresh feed
function refreshFeed(){
  $('#instafeed').empty();
  myFeed.run();
}
document.getElementById ("pressForFood").addEventListener ("click", refreshFeed);

//Carousel initialize
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

});
