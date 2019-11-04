class Game {
    constructor($canvas) {
        this.canvas = $canvas;
        this.context = $canvas.getContext("2d");
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.player = new Player(this);
        this.background = new Background(this);
        this.computer = new Computer(this);
        this.controls = new Controls(this);
        this.controls.setControls();
    }

    start() {
        this.drawEverything();
    }
    
    drawEverything() {
        this.clearAll();
        this.background.draw();
        this.player.draw();
        this.computer.draw();
    }

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}