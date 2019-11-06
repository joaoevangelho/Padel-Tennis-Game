class ScoreBoard {
    constructor(game) {
        this.game = game;
        this.player1Score = [0, 0, 0]
        this.player2Score = [0, 0, 0]

    }

    drawScoreBoard() {
        const context = this.game.context;
        const score = this.game.score;

        context.font = '18px monospace';
        context.fillStyle = '#fff';

        context.fillText(`${this.player1Score[0]} || ${this.player2Score[0]}`, 20, 40);

    }


}
