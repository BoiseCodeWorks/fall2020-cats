import catsService from "../Services/CatsService.js";
import STORE from "../store.js";

// PRIVATE
function _drawCat() {
  let cat = STORE.State.cat
  document.getElementById('cat').innerHTML = cat.Template
}


// PUBLIC
export default class CatsController {
  constructor() {
    _drawCat()
  }

  pet() {
    catsService.pet()
    _drawCat()
  }

}

