import STORE from "../store.js";

class CatsService {
  constructor() {
    console.log("Creating Cats Service", STORE)
  }
  pet() {
    let rnd = Math.random()
    let cat = STORE.State.cat
    cat.pets++
    if (rnd > .5) {
      cat.mood++
    } else {
      cat.mood--
    }
  }
}




const SERVICE = new CatsService();
export default SERVICE