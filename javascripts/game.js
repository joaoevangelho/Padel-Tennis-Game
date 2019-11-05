class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = $canvas.getContext("2d");
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.player = new Player(this, 100, 200);
        this.background = new Background(this);
        this.ball = new Ball(this);
        this.player2 = new Player2(this, 650, 200);
        this.controls = new Controls(this);
        this.controls.setControlsPlayer1();
        this.controls.setControlsPlayer2();
    }

    clearAll() {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }

    collisionDetection() {

    }

    update() {
        const context = this.context;
        const width = this.width;
        const height = this.height;
        const ball = this.ball
        context.clearRect(0, 0, this.width, this.height);

        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.y + ball.vy > height - 100 || ball.y + ball.vy < 100) {
            ball.vy *= -1;
        }
        if (ball.x + ball.vx > width || ball.x + ball.vx < 0) {
            ball.vx *= -1;
        }

    }


    start() {
        this.drawEverything();
        this.controls.setControlsPlayer1();
        this.controls.setControlsPlayer2();


    }

    drawEverything(timestamp) {
        this.update();
        //this.clearAll();
        this.background.draw();
        this.ball.draw();
        this.player.draw();
        this.player2.draw();
        window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
    }


}


//acho que tenho de fazer uma função update everything. neste momento tenho um draw everything, que esta a desenhar o player, mas nao esta a chamar a função que o faz mexer