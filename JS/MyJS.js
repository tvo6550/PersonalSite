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

  //Check if a class exists
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  //On key press change view
  $(document).keydown(function(e) {
    if(!animating){
      animating = true;
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

  var color1 = "#77e1ff";
  var color2 = "#f4c17a";
  var color3 = "#e56967";
  var color4 = "#79c694";
  var color5 = "#efa2c6";
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
      $('#projects').hide(0, $('#food').show());
      $('#foodItem').siblings().removeClass('selectedMenu');
      $('#foodItem').addClass('selectedMenu');
      $('#projectsItem').children().removeClass('fa-circle');
      $('#projectsItem').children().addClass('fa-circle-thin');
      $('#foodItem').children().removeClass('fa-circle-thin');
      $('#foodItem').children().addClass('fa-circle');
    }
  else if($('#welcome').css('display')!='none'){
      $('#welcome').hide(0, $('#about').show());
      $('#aboutItem').siblings().removeClass('selectedMenu');
      $('#aboutItem').addClass('selectedMenu');
      $('#welcomeItem').children().removeClass('fa-circle');
      $('#welcomeItem').children().addClass('fa-circle-thin');
      $('#aboutItem').children().removeClass('fa-circle-thin');
      $('#aboutItem').children().addClass('fa-circle');
    }
  else if($('#about').css('display')!='none'){
      $('#about').hide(0, $('#skills').show());
      $('#skillsItem').siblings().removeClass('selectedMenu');
      $('#skillsItem').addClass('selectedMenu');
      $('#aboutItem').children().removeClass('fa-circle');
      $('#aboutItem').children().addClass('fa-circle-thin');
      $('#skillsItem').children().removeClass('fa-circle-thin');
      $('#skillsItem').children().addClass('fa-circle');
    }
  else if($('#skills').css('display')!='none'){
      $('#skills').hide(0, $('#projects').show());
      $('#projectsItem').siblings().removeClass('selectedMenu');
      $('#projectsItem').addClass('selectedMenu');
      $('#skillsItem').children().removeClass('fa-circle');
      $('#skillsItem').children().addClass('fa-circle-thin');
      $('#projectsItem').children().removeClass('fa-circle-thin');
      $('#projectsItem').children().addClass('fa-circle');
    }
    else if($('#food').css('display')!='none'){
        $('#food').hide(0, $('#welcome').show());
        $('#welcomeItem').siblings().removeClass('selectedMenu');
        $('#welcomeItem').addClass('selectedMenu');
        $('#foodItem').children().removeClass('fa-circle');
        $('#foodItem').children().addClass('fa-circle-thin');
        $('#welcomeItem').children().removeClass('fa-circle-thin');
        $('#welcomeItem').children().addClass('fa-circle');
      }
}

//Go to previous page
function changeViewUp(){
  if($('#projects').css('display')!='none'){
      $('#projects').hide(0,$('#skills').show());
      $('#skillsItem').siblings().removeClass('selectedMenu');
      $('#skillsItem').addClass('selectedMenu');
      $('#projectsItem').children().removeClass('fa-circle');
      $('#projectsItem').children().addClass('fa-circle-thin');
      $('#skillsItem').children().removeClass('fa-circle-thin');
      $('#skillsItem').children().addClass('fa-circle');
    }
  else if($('#welcome').css('display')!='none'){
      $('#welcome').hide(0, $('#food').show());
      $('#foodItem').siblings().removeClass('selectedMenu');
      $('#foodItem').addClass('selectedMenu');
      $('#welcomeItem').children().removeClass('fa-circle');
      $('#welcomeItem').children().addClass('fa-circle-thin');
      $('#foodItem').children().removeClass('fa-circle-thin');
      $('#foodItem').children().addClass('fa-circle');
    }
  else if($('#about').css('display')!='none'){
      $('#about').hide(0, $('#welcome').show());
      $('#welcomeItem').siblings().removeClass('selectedMenu');
      $('#welcomeItem').addClass('selectedMenu');
      $('#aboutItem').children().removeClass('fa-circle');
      $('#aboutItem').children().addClass('fa-circle-thin');
      $('#welcomeItem').children().removeClass('fa-circle-thin');
      $('#welcomeItem').children().addClass('fa-circle');
    }
  else if($('#skills').css('display')!='none'){
      $('#skills').hide(0, $('#about').show());
      $('#aboutItem').siblings().removeClass('selectedMenu');
      $('#aboutItem').addClass('selectedMenu');
      $('#skillsItem').children().removeClass('fa-circle');
      $('#skillsItem').children().addClass('fa-circle-thin');
      $('#aboutItem').children().removeClass('fa-circle-thin');
      $('#aboutItem').children().addClass('fa-circle');
    }
    else if($('#food').css('display')!='none'){
        $('#food').hide(0, $('#projects').show());
        $('#projectsItem').siblings().removeClass('selectedMenu');
        $('#projectsItem').addClass('selectedMenu');
        $('#foodItem').children().removeClass('fa-circle');
        $('#foodItem').children().addClass('fa-circle-thin');
        $('#projectsItem').children().removeClass('fa-circle-thin');
        $('#projectsItem').children().addClass('fa-circle');
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
    setTimeout(function() {animating = false}, 600);
  }
});

//Make things selected
$(function() {
    $('#contentItems il').click(function() {
        $(this).siblings().removeClass('selectedMenu');
        $(this).addClass('selectedMenu');


        if(hasClass($(this), "menuItem")){
          $('#projects').hide(0, $('#welcome').show());
        }
    });
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
        largeHeader.style.height = height+'px';
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
        if (image.tags.indexOf('food') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }
        return false;
        },
        template: '<li><div><a href="{{link}}" target="_blank"><img src="{{image}}" style="border:10px solid white;"/></div></li>',
        resolution: 'low_resolution'
    });
myFeed.run();

//Refresh feed
function refreshFeed(){
  $('#instafeed').empty();
  myFeed.run();
}
document.getElementById ("pressForFood").addEventListener ("click", refreshFeed);

});
