class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = $canvas.getContext("2d");
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.player = new Player(this, 100, 200, 'left');
        this.player2 = new Player(this, 650, 200, 'right');
        this.background = new Background(this);
        this.ball = new Ball(this);
        this.scoreboard = new ScoreBoard(this);
        this.controls = new Controls(this);
        this.controls.setControlsPlayer1();
        this.controls.setControlsPlayer2();

    }

    clearAll() {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }

    checkColisionWithPlayers(ball, player) {
        let ballTop = ball.y - ball.radius; // Y
        let ballBottom = ball.y + ball.radius; // Y
        let ballLeft = ball.x - ball.radius; // X
        let ballRight = ball.x + ball.radius; // X

        let playerTop = player.positionY;
        let playerBottom = player.positionY + player.size; // 60 = player.height;
        let playerLeft = player.positionX;
        let playerRight = player.positionX + player.size; // 60 = player.width


        if (ballBottom === playerTop) {
            if (!(ballRight < playerLeft || ballLeft > playerRight)) {
                console.log('COLLIDED TOP');
            }
        }
        if (ballTop === playerBottom) {
            if (!(ballRight < playerLeft || ballLeft > playerRight)) {
                console.log('COLLIDED BOTTOM');
            }
        }
        if (ballLeft === playerRight) {
            if (!(ballTop > playerBottom || ballBottom < playerTop)) {
                console.log('COLLIDED RIGHT');
                ball.vx += 0.2;
                ball.vx *= -1;
            }
        }
        if (ballRight > playerLeft && ballRight < playerRight) {
            if (!(ballTop > playerBottom || ballBottom < playerTop)) {
                console.log('COLLIDED LEFT');
                ball.vx += 0.5;
                ball.vx *= -1;
            }
        }
    }

    update() {
        const context = this.context;
        const width = this.width;
        const height = this.height;
        const ball = this.ball
        context.clearRect(0, 0, this.width, this.height);

        this.checkColisionWithPlayers(this.ball, this.player);
        this.checkColisionWithPlayers(this.ball, this.player2);


        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.y + ball.vy > height - 100 || ball.y + ball.vy < 100) {
            ball.vy *= -1;
        }
        if (ball.x + ball.vx > width - 100 || ball.x + ball.vx < 100) {
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