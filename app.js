var player1;

function startGame() {
  myGameArea.start();
  player1 = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
}
