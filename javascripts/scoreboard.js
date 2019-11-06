class ScoreBoard {
    constructor (game) {
      this.game = game;
    }
  
    drawScoreBoard () {
      const context = this.game.context;
      const score = this.game.score;

      context.font = '18px monospace';
      context.fillStyle = '#fff';
  
      context.fillText(`Score: ${score}`, 20, 40);
    }

    
  }