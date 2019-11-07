class PlayerWinsGame {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.img = new Image();
        this.img.src = "./../images/mario-wins.png"
    }

    drawplayerWins(mario) {
        this.context.drawImage(this.img, 0, 320, 400/1.5, 250/1.5)
    }

    clearAll() {
        this.context.fillRect(0, 0, 800, 500);
    }


}