import CatsController from "./Controllers/CatsController.js";

class App {
  catsController = new CatsController();


  constructor() {
    console.log("creating app");
  }
}

window["app"] = new App();
