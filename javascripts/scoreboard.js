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

        context.fillText(`${this.tennisScore().player1} - ${this.tennisScore().player2}`, 20, 40);

    }

    tennisScore() {
        let score1 = 0;
        let score2 = 0;

        if (this.player1Score[0] === 0) {
            score1 = '0'
        } else if (this.player1Score[0] === 1) {
            score1 = '15'
        } else if (this.player1Score[0] === 2) {
            score1 = '30'
        } else if (this.player1Score[0] === 3) {
            score1 = '40'
        } else if (this.player1Score[0] === 4) {
            score1 = 'Game!'
        };


        if (this.player2Score[0] === 0) {
            score2 = '0'
        } else if (this.player2Score[0] === 1) {
            score2 = '15'
        } else if (this.player2Score[0] === 2) {
            score2 = '30'
        } else if (this.player2Score[0] === 3) {
            score2 = '40'
        } else if (this.player2Score[0] === 4) {
            score2 = 'Game!'
        };

        return {
            player1: score1,
            player2: score2
        };

    }

}