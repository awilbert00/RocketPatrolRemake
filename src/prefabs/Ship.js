class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }
    update() {
        this.x -= 2;

        if(this.x< -this.width) {
            this.x = game.config.width;
        }
    }
}

