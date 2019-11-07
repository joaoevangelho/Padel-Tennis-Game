class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = $canvas.getContext("2d");
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.player = new Player(this, 100, 200, 'left');
        this.player2 = new Player(this, 500, 200, 'right');
        this.background = new Background(this);
        this.ball = new Ball(this);
        this.scoreboard = new ScoreBoard(this);
        this.controls = new Controls(this);
        this.controls.setControlsPlayer1();
        this.controls.setControlsPlayer2();
        this.playArray = []
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
                //console.log('COLLIDED TOP');
                ball.vx += 0.4;
                ball.vx *= -1;
                this.playArray = [];
                this.playArray.push(player);
            }
        }
        if (ballTop === playerBottom) {
            if (!(ballRight < playerLeft || ballLeft > playerRight)) {
                console.log('COLLIDED BOTTOM');
                ball.vx += 1.2;
                ball.vx *= -1;
                this.playArray = [];
                this.playArray.push(player);
            }
        }
        if (ballLeft === playerRight) {
            if (!(ballTop > playerBottom || ballBottom < playerTop)) {
                //console.log('COLLIDED RIGHT');
                ball.vx += 1.2;
                ball.vx *= -1;
                this.playArray = [];
                this.playArray.push(player);
            }
        }
        if (ballRight > playerLeft && ballRight < playerRight) {
            if (!(ballTop > playerBottom || ballBottom < playerTop)) {
                console.log('COLLIDED LEFT');
                ball.vx += 0.5;
                ball.vx *= -1;
                this.playArray = [];
                this.playArray.push(player);
            }
        }

    }
    score() {
        console.log(this.playArray);
    }


    reset() {
        this.player = new Player(this, 120, 200, 'left');
        this.player2 = new Player(this, 630, 200, 'right');
        this.ball = new Ball(this);
    }


    start() {
        this.reset();
        this.drawEverything();
        this.controls.setControlsPlayer1();
        this.controls.setControlsPlayer2();
    }

    update() {
        const context = this.context;
        const width = this.width;
        const height = this.height;
        const ball = this.ball
        context.clearRect(0, 0, this.width, this.height);

        this.player.update();
        this.player2.update();
        this.checkColisionWithPlayers(this.ball, this.player);
        this.checkColisionWithPlayers(this.ball, this.player2);
        //console.log(this.playArray);



        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.y + ball.vy > height - 100 || ball.y + ball.vy < 100) { //bola tocar nas paredes cima e baixo
            ball.vy *= -1;
        }
        if (ball.x + ball.vx > width - 100 || ball.x + ball.vx < 100) { //bola tocar nas paredes esquerda e direita
            ball.vx *= -1;
            this.playArray.push('wall');
        }

        if (ball.x < 400 && !this.ball.isLeft) {
            //console.log("tou na esquerda!");
            this.ball.isLeft = true;
            this.ball.isRight = false;
            this.playArray.push('net');

        } else if (ball.x > 400 && !this.ball.isRight) {
            //console.log("tou na direita!");
            this.ball.isLeft = false;
            this.ball.isRight = true;
            this.playArray.push('net');
        }

        if (typeof (this.playArray[0]) === 'object' && this.playArray[1] === 'net' && this.playArray[2] === 'wall' && this.playArray[3] === 'net') {
            if (this.playArray[0].side === 'left') {
                this.playArray[0].game.scoreboard.player1Score[0]++;
            } else {
                this.playArray[0].game.scoreboard.player2Score[0]++;
            }
            console.log(this.scoreboard);

            this.playArray = [];
            this.reset()
        }
    }


    drawEverything(timestamp) {
        this.update();
        //this.clearAll();
        this.background.draw();
        this.ball.draw();
        this.player.draw();
        this.player2.draw();
        this.scoreboard.drawScoreBoard();
        window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
    }


}