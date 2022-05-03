var player;

var distance = 20;

document.getElementById("p_s").innerHTML = "press space to start!";

function startGame() {
  myGameArea.start();
  player = new component(30, 30, "red", 10, 295);
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.body.onkeydown = function (event) {
  if (event.key === spacebar) {
    current_letter = alphabet[getRandomInt(25)];
    console.log(current_letter);
  }
};

document.body.onkeydown = function (event) {
  if (player.x >= 1200) {
    console.log("win!");
  }
  if (event.key === current_letter) {
    player.x += distance;
    current_letter = alphabet[getRandomInt(25)];
    console.log(current_letter);
  }
};

function updateGameArea() {
  myGameArea.clear();
  player.update();
}
