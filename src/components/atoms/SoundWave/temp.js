var speed = 4;
var width = 3;
var bar = 150;
var margin = 1;

var lineArr = [];

/*var line1 = new line(0,0);
var line2 = new line(4,100);
var line3 = new line(8,60);*/

var canvas = document.getElementById('myCanvas');
var context = this.canvas.getContext('2d');

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var midHeight = $('#myCanvas').height() / 2;
var canvasWidth = $('#myCanvas').width();
var canvasHeight = $('#myCanvas').height();

function start() {
  var xPos = 0;

  for (var i = 0; i < bar; i++) {
    var ranHeight = Math.floor(Math.random() * (canvasHeight - 0 + 1)) + 0;
    var lines = new line(xPos, ranHeight);
    lineArr.push(lines);
    xPos += width + margin;
  }
  action();
}

function line(xPos, height) {
  this.x = xPos;
  this.length = 'long';
  this.width = width;
  this.height = height;
}

function midline() {
  context.beginPath();
  context.moveTo(0, midHeight);
  context.lineTo(canvasWidth, midHeight);
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
}

line.prototype.run = function () {
  $('#log').html(this.height);

  context.beginPath();

  if (this.length == 'long') {
    this.height += speed;
  } else {
    this.height -= speed;
  }

  context.rect(this.x, midHeight - this.height / 2, this.width, this.height);
  context.fillStyle = '#8ED6FF';
  context.fill();

  if (this.height >= canvasHeight) {
    this.length = 'short';
  } else if (this.height <= 0) {
    this.length = 'long';
  }
};

function action() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  midline();

  $.each(lineArr, function (index, ele) {
    lineArr[index].run();
  });

  requestAnimationFrame(action);
}

start();
