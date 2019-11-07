class Controls {
    constructor(game) {
        this.game = game;
    }

    setControlsPlayer1() {
        window.addEventListener('keydown', event => {

            event.preventDefault();

            switch (event.keyCode) {
                case 65:
                    //this.game.player.moveLeft();
                    this.game.player.vx = -1;
                    break;
                case 87:
                    //this.game.player.moveUp();
                    this.game.player.vy = -1;

                    break;
                case 68:
                    //this.game.player.moveRight();
                    this.game.player.vx = 1;
                    break;
                case 83:
                    //this.game.player.moveDown();
                    this.game.player.vy = 1;
                    break;
            }
        });
        window.addEventListener('keyup', event => {
            switch (event.keyCode) {
                case 65:
                    this.game.player.vx = 0
                    break;
                case 87:
                    this.game.player.vy = 0
                    break;
                case 68:
                    this.game.player.vx = 0
                    break;
                case 83:
                    this.game.player.vy = 0
                    break;
            }
        })
    }

    setControlsPlayer2() {
        window.addEventListener('keydown', event => {

            event.preventDefault();

            switch (event.keyCode) {
                case 37:
                    this.game.player2.vx = -1
                    //this.game.player2.moveLeft();
                    console.log(this.game.player2.vx, this.game.player2.positionX);

                    break;
                case 38:
                    this.game.player2.vy = -1
                    //this.game.player2.moveUp();
                    break;
                case 39:
                    this.game.player2.vx = 1
                    //this.game.player2.moveRight();
                    break;
                case 40:
                    this.game.player2.vy = 1
                    //this.game.player2.moveDown();
                    break;
            }
        });
        window.addEventListener('keyup', event => {
            switch (event.keyCode) {
                case 37:
                    this.game.player2.vx = 0
                    break;
                case 38:
                    this.game.player2.vy = 0
                    break;
                case 39:
                    this.game.player2.vx = 0
                    break;
                case 40:
                    this.game.player2.vy = 0
                    break;
            }
        })
    }
}



/*

//THIS WAY WORKS WELL. BOTH PLAYERS RESPECT BOUNDARIES OF THE GAME AND THEY BOTH MOVE. THEY DON'T SLIDE
    setControlsPlayer1() {
        window.addEventListener('keydown', event => {

            event.preventDefault();

            switch (event.keyCode) {
                case 65:
                    this.game.player.moveLeft();
                    break;
                case 87:
                    this.game.player.moveUp();
                    break;
                case 68:
                    this.game.player.moveRight();
                    break;
                case 83:
                    this.game.player.moveDown();
                    break;
            }
        });
    }


    setControlsPlayer2() {
        window.addEventListener('keydown', event => {

            event.preventDefault();

            switch (event.keyCode) {
                case 37:
                    this.game.player2.moveLeft();
                    break;
                case 38:
                    this.game.player2.moveUp();
                    break;
                case 39:
                    this.game.player2.moveRight();
                    break;
                case 40:
                    this.game.player2.moveDown();
                    break;
            }
        });
    }
    */