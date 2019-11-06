class Controls {
    constructor(game) {
        this.game = game;
    }

    setControlsPlayer1() {
        window.addEventListener('keydown', event => {

            event.preventDefault();

            switch (event.keyCode) {
                case 65:
                    this.game.player.moveLeft();
                    //this.game.drawEverything();
                    break;
                case 87:
                    this.game.player.moveUp();
                    //this.game.drawEverything();
                    break;
                case 68:
                    this.game.player.moveRight();
                    //this.game.drawEverything();
                    break;
                case 83:
                    this.game.player.moveDown();
                    //this.game.drawEverything();
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
                    //this.game.drawEverything();
                    break;
                case 38:
                    this.game.player2.moveUp();
                    //this.game.drawEverything();
                    break;
                case 39:
                    this.game.player2.moveRight();

                    //this.game.drawEverything();
                    break;
                case 40:
                    this.game.player2.moveDown();
                    //this.game.drawEverything();
                    break;
            }
        });
    }
}