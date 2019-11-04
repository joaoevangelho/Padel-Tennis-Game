let ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "yellow",
  draw: function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
  }
};

ball.draw();


class Ball {
    constructor() {
        this.game = game;
    }
}