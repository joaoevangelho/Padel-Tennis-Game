class Ball {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.$canvas = game.$canvas;

        this.radius = 5;
        this.x = 150;
        this.y = 150;
        this.vx = 10;
        this.vy = 10;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = 'yellow';
        this.context.fill();
        this.context.closePath();
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > $canvas.height || this.y + this.vy < 0) {
            this.vy *= -1;
        }
        if (this.x + this.vx > $canvas.width || this.x + this.vx < 0) {
            this.vx *= -1;
        }
        this.context.clearRect(0, 0, $canvas.width, $canvas.height);
    }
}


