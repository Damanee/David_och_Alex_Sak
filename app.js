var player;

function copyImageToCanvas() {
  var image = document.querySelector("img");
  var canvas = document.querySelector("canvas");

  var ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0);
}

setTimeout(() => {
  copyImageToCanvas();
}, 300);

let distance = 20;

document.getElementById("p_s").innerHTML = "press space to start!";

function startGame() {
  myGameArea.start();
  var image = document.querySelector("img");
  var canvas = document.querySelector("canvas");

  var ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0);
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1250;
    this.canvas.height = 584;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
let current_letter;
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = [, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let isPlaying = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.body.onkeydown = function (event) {
  console.log(event);
  if (event.code === "Space") {
    //Starta om om isPlaying är false
    current_letter = alphabet[getRandomInt(25)];
    document.getElementById("p_s").innerHTML = current_letter;
  } else if (event.key === current_letter) {
    // hoppa framåt
    isPlaying = true;
    if (isPlaying === true) {
      console.log(event.key);
      player.x += distance;
      current_letter = alphabet[getRandomInt(25)];
      document.getElementById("p_s").innerHTML = current_letter;
    } else {
      console.log(current_letter);
      clockInterval = setInterval(setTime, 1000);
    }
  }

  if (player.x >= 1200) {
    isPlaying = false;
    distance = 0;
    document.getElementById("p_s").innerHTML = "you finished";
    clearInterval(clockInterval);
  }
};

function updateGameArea() {
  myGameArea.clear();
  player.update();
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

let clockInterval;
