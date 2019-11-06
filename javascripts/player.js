class Player {
    constructor(game, positionX, positionY, side) {
        this.game = game;
        this.context = game.context
        this.img = new Image();
        this.positionY = positionY;
        this.positionX = positionX;
        this.vx = 0;
        this.vy = 0;
        this.size = 60;
        this.yMin = 100;
        this.yMax = 340;
        if (side === 'left') {
            this.xMin = 100;
            this.xMax = 340;
            this.img.src = "./../images/marioRight.png";
        } else {
            this.xMin = 400;
            this.xMax = 640;
            this.img.src = "./../images/marioLeft.png";
        }

    }

    draw() {
        this.context.save();
        this.context.drawImage(this.img, this.positionX, this.positionY, 60, 60);
        this.context.strokeStyle = 'white';
        this.context.strokeRect(this.positionX, this.positionY, 60, 60);
        this.context.restore();
    }

    moveUp() {
        this.positionY > this.yMin ? this.positionY -= 5 : this.positionY;
    }

    moveDown() {
        this.positionY < this.yMax ? this.positionY += 5 : this.positionY
    }

    moveRight() {
        this.positionX < this.xMax ? this.positionX += 5 : this.positionX
    }

    moveLeft() {
        this.positionX > this.xMin ? this.positionX -= 5 : this.positionX
    }
}