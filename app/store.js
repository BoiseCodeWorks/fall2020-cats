import Cat from "./Models/Cat.js";

let _state = {
  /** @type {Cat} */
  cat: new Cat('Mr. Snibbley', "https://i.pinimg.com/originals/70/29/8d/70298d400c5adfac2788fdd51a0b2ede.png", 2)
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }


}

const STORE = new Store();
export default STORE;
