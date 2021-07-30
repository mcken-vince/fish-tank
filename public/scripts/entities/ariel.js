class Ariel extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/ariel4.png'; // Set the image
    this.maxSwimSpeed = 200;
  }
}
