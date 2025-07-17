import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }
  create() {
    // Add the player sprite to the center of the screen
    this.player = this.physics.add.sprite(400, 300, "player");
    this.player.setScale(2); // Make it bigger for testing

    // Add a zombie sprite for testing
    this.zombie = this.add.sprite(200, 200, "zombie");
    this.zombie.setScale(2); // Make it bigger for testing

    // Set up keyboard input (arrow keys and WASD)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys("W,A,S,D");
  }

  update() {
    const speed = 200;
    let vx = 0;
    let vy = 0;

    // Horizontal movement
    if (this.cursors.left.isDown || this.wasd.A.isDown) {
      vx = -speed;
    } else if (this.cursors.right.isDown || this.wasd.D.isDown) {
      vx = speed;
    }

    // Vertical movement
    if (this.cursors.up.isDown || this.wasd.W.isDown) {
      vy = -speed;
    } else if (this.cursors.down.isDown || this.wasd.S.isDown) {
      vy = speed;
    }

    // Set player velocity
    this.player.setVelocity(vx, vy);
  }
}