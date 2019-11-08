class PlayerWinsGame {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.img = new Image();
        this.img.src = "./../images/player-1-wins.png"
        this.img2 = new Image();
        this.img2.src = "./../images/player-2-wins.png"
        

    }

    drawplayer1Wins() {
        this.context.drawImage(this.img, 0, 320, 400 / 1.5, 250 / 1.5);
        this.context.font = '200px Verdana'
        this.context.fillText(`PLAYER 1 HAS WON!`, 50, 350, 700)
    }

    drawplayer2Wins() {
        this.context.drawImage(this.img2, 450, 320, 400 / 1.5, 250 / 1.5);
        this.context.font = '200px Verdana'
        this.context.fillText(`PLAYER 2 HAS WON!`, 50, 250, 700)

    }

    clearAll() {
        this.context.fillRect(0, 0, 800, 500);
    }


}