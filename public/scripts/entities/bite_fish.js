class BiteFish extends GoFish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bitefish.gif'; // Set the image
    this.maxSwimSpeed = 250;
    this.isTasty = false;
  }

  updateOneTick() {
    // This method gets called every PHYSICS_TICK_SIZE_S which is currently every 0.010 seconds
    // This is where you update the position of the sprite.
    for (let fish of this.fishtank.getProximateDenizens(this.position, 20)) {
      // console.log("fish: ", fish);
      // console.log("fish.id: ", fish.id);
      // fish.kill(5); // kills BiteFish as soon as it spawns
      if (fish instanceof SwitchFish) {
        // console.log("fish: ", fish);
        // console.log("fish.id: ", fish.id);
        fish.kill();
      }
      if (fish instanceof GoFish) {
        fish.onClick();
      }
    }

  }
}
