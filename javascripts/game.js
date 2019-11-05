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

    start() {
        this.drawEverything();
        this.controls.setControlsPlayer1();
        this.controls.setControlsPlayer2();
        //this.ball.move();
    }

    drawEverything() {
        this.clearAll();
        this.background.draw();
        this.ball.draw();
        this.player.draw();
        this.player2.draw();
    }

    clearAll() {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }
}


//acho que tenho de fazer uma função update everything. neste momento tenho um draw everything, que esta a desenhar o player, mas nao esta a chamar a função que o faz mexer