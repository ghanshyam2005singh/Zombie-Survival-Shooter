import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    // Initial values (you'll update these from GameScene)
    this.health = 100;
    this.score = 0;

    // Add text to the top left for health and score
    this.healthText = this.add.text(16, 16, `Health: ${this.health}`, {
      fontSize: "20px",
      fill: "#fff"
    });
    this.scoreText = this.add.text(16, 40, `Score: ${this.score}`, {
      fontSize: "20px",
      fill: "#fff"
    });

    // Listen for events from GameScene to update UI
    this.game.events.on("update-health", (health) => {
      this.health = health;
      this.healthText.setText(`Health: ${this.health}`);
    });

    this.game.events.on("update-score", (score) => {
      this.score = score;
      this.scoreText.setText(`Score: ${this.score}`);
    });
  }
}