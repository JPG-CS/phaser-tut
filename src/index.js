import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // preload a sprite
  this.load.image("jim", "./public/assets/jim.png");
}

function create() {
  this.add.image(400, 300, "jim");
}

function update() {}
