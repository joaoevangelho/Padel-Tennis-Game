class Ball {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.$canvas = game.$canvas;
        this.img = new Image();
        this.radius = 5;
        this.x = 300 //this.game.player.positionX + 5;
        this.y = 300 //this.game.player.positionY + 5;
        this.vx = 1;
        this.vy = 1;
        //this.img.src = "./../images/bola.png";
    }

    draw() {
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = 'yellow';
        this.context.fill();
        this.context.closePath();


        //this.context.drawImage(this.img, 0, 0, 500, 500, this.x, this.y, 15, 15);
        this.context.restore();

    }

}
/*
    move() {
        console.log('ball doesnt work')
        this.context.clearRect(0, 0, this.game.width, this.game.height - 100);
        this.game.drawEverything();
        this.draw();
        if (this.y + this.vy > this.game.height - 100 || this.y + this.vy < 100) {
            this.vy *= -1;
        }
        if (this.x + this.vx > this.game.width || this.x + this.vx < 0) {
            this.vx *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;

        //setInterval(this.move, 100)


    }
*/