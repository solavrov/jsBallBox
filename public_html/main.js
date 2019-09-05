import {Ball} from "./Ball.js";

const BOX = document.getElementById("box");
const BALL_SIZE = 30;
const NUM_OF_BALLS = 30;
const VEL = 3;
const FPS = 100;

function getRandPos() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var x = (w - BALL_SIZE) * Math.random();
    var y = (h - BALL_SIZE) * Math.random();
    return [Math.round(x), Math.round(y)];
}

function getRandVel(v) {
    var phi = 2 * Math.PI * Math.random();
    return [v * Math.cos(phi), v * Math.sin(phi)];
}

function getRandCol() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandCol2() {
    var cols = ["red", "blue", "green", "orange", "yellow", "darkblue", 
        "purple", "cyan", "black", "brown", "pink", "coral", "indigo", "lime", 
        "deeppink", "magenta", "olive", "royalblue", "maroon", "navy", 
        "aquamarine", "grey"];
    return cols[Math.floor(Math.random()*cols.length)];
}

var balls = new Array();

for (var i = 0; i < NUM_OF_BALLS; i++) {
    var pos = getRandPos();
    var vel = getRandVel(VEL);
    var col = getRandCol2();
    var b = new Ball(pos[0], pos[1], vel[0], vel[1], col, BALL_SIZE, BOX, FPS);
    balls.push(b);
  }

for (var i in balls) {
    balls[i].start();
}

