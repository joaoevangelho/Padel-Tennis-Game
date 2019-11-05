class Background {
    constructor(game) {
        this.game = game;
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.img = new Image()
        this.img.src = "./../images/fake grass.png";
    }
    draw() {
        //court grass
        //this.context.fillStyle = 'green';
        //this.context.fillRect(0, 0, 800, 500);
        this.context.drawImage(this.img, 0, 0, 800, 500);
        this.context.restore();


        //court outside lines
        this.context.strokeStyle = 'white';
        this.context.lineWidth = 2;
        this.context.strokeRect(100, 100, 600, 300);


        //court central box
        this.context.strokeStyle = 'white';
        this.context.lineWidth = 2;
        this.context.strokeRect(200, 100, 400, 300);

        //court horizontal center line
        this.context.fillStyle = 'white';
        this.context.lineWidth = 2;
        this.context.beginPath();
        this.context.moveTo(200, 250);
        this.context.lineTo(600, 250);
        this.context.stroke();
        this.context.closePath();

        //court vertical center line
        this.context.fillStyle = 'white';
        this.context.lineWidth = 2;
        this.context.beginPath();
        this.context.moveTo(400, 100);
        this.context.lineTo(400, 400);
        //net shade
        this.context.shadowBlur = 5;
        this.context.shadowColor = 'black';
        this.context.stroke();
        this.context.closePath();
        this.context.shadowColor = 'transparent';
    }
}