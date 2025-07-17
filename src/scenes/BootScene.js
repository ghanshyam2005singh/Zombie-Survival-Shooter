import playerImgUrl from "../assets/player.png?url";
import zombieImgUrl from "../assets/zombie.png?url";
import bulletImgUrl from "../assets/bullet.png?url";
import Phaser from "phaser";

console.log('playerImgUrl:', playerImgUrl);
console.log('zombieImgUrl:', zombieImgUrl);
console.log('bulletImgUrl:', bulletImgUrl);

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.image("player", playerImgUrl);
    this.load.image("zombie", zombieImgUrl);
    this.load.image("bullet", bulletImgUrl);

    this.load.on('filecomplete-image-player', function () {
      console.log('Player image loaded!');
    });
    this.load.on('loaderror', function (file) {
      console.error('Load error:', file.key, file.src);
    });
  }

  create() {
    this.scene.start("GameScene");
  }
}