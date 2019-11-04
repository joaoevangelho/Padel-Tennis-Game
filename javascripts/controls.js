class Controls {
    constructor(game) {
      this.game = game;
    //   this.player = this.game.player
    }
  
    setControls () {
      window.addEventListener('keydown', event => {
        switch (event.keyCode) {
            //LEFT
          case 37:
               this.game.player.vx=-5
          break;
            //RIGHT
          case 39:
               this.game.player.vx=5
          break;
            //UP
          case 38:
                   this.game.player.vy = -5
          break;
            //DOWN
          case 40:
                   this.game.player.vy = 5
          break;
        }
      })
    }
  }