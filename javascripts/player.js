class Player {
    constructor(game, positionX, positionY) {
        this.game = game;
        this.context = game.context
        this.img = new Image();
        this.positionY = positionY;
        this.positionX = positionX;
        this.vx = 0;
        this.vy = 0;
        this.size = this.radius
        this.img.src = "./../images/marioRight.png";
    }

    draw() {
        this.context.drawImage(this.img, this.positionX, this.positionY, 60, 60);
        this.context.restore();
    }

    moveUp() {
        this.positionY < 400 ? this.positionY -= 5 : this.positionY
    }

    moveDown() {
        this.positionY > 0 ? this.positionY += 5 : this.positionY
    }

    moveRight() {
        this.positionX < 350 ? this.positionX += 5 : this.positionX
    }

    moveLeft() {
        this.positionX > 0 ? this.positionX -= 5 : this.positionX
    }
}