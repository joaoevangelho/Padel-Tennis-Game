class Player {
    constructor(game) {
        this.game = game;
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = this.width;
        this.y = this.height;
        this.img = new Image();
        this.size = 1 * this.radius
        this.img.src = "./../images/mario-2.png";
    }

    draw() {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
        this.context.restore();
    }

    //1,4 da imagem
}


