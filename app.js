var player;

let distance = 75;
let neg_distance = 25;
let highscore = "";

function startGame() {
  document.getElementById("p_s").innerHTML = "press space to start!";
  document.getElementById("c_l").style.display = "none";
  distance = 75;
  isPlaying = false;
  clearInterval(clockInterval);
  myGameArea.start();
  let img = document.getElementById("racecar");
  player = new component(30, 30, img, 10, 250);
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  totalSeconds = 0;
}
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1250;
    this.canvas.height = 584;
    this.context = this.canvas.getContext("2d");
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};
function component(width, height, img, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.img = img;
  ctx = myGameArea.context;
  ctx.drawImage(img, x, y);
  this.update = function () {
    ctx = myGameArea.context;
    ctx.drawImage(this.img, this.x, this.y, 125, 125);
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

let gameStartTime;

document.body.onkeydown = function (event) {
  console.log(event);
  if (event.code === "Space" && isPlaying === false) {
    player.x += neg_distance;
    isPlaying = true;
    document.getElementById("p_s").innerHTML = "";
    current_letter = alphabet[getRandomInt(25)];
    document.getElementById("c_l").style.display = "block";
    document.getElementById("c_l").innerHTML = current_letter;
    gameStartTime = new Date();
    clockInterval = setInterval(setTime, 1000);
  } else if (event.key === current_letter) {
    // hoppa framåt
    if (isPlaying === true) {
      console.log(event.key);
      player.x += distance;
      current_letter = alphabet[getRandomInt(25)];
      document.getElementById("c_l").innerHTML = current_letter;
    }
  }
  if (player.x >= 1200) {
    isPlaying = false;
    distance = 0;
    document.getElementById("p_s").innerHTML = "you finished";
    score();
    document.getElementById("c_l").style.display = "none ";
    clearInterval(clockInterval);
    console.log(totalSeconds);
  } else if (event.key != current_letter && isPlaying === true) {
    player.x -= neg_distance;
  }

  function score() {
    if (highscore < totalSeconds) {
      totalSeconds = highscore;
      document.getElementById("p_s").innerHTML =
        "you finished! new highscore, time:" + totalSeconds;
    }
  }
};
function updateGameArea() {
  myGameArea.clear();
  player.update();
}
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
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
