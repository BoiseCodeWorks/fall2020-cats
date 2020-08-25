export default class Cat {
  /**
   * 
   * @param {String} name 
   * @param {String} img 
   * @param {Number} tollerance 
   */
  constructor(name, img, tollerance) {
    this.name = name
    this.img = img
    this.tollerance = tollerance
    this.mood = 0
    this.pets = 0

    console.log("Made a new cat", name)
  }

  moodString() {
    if (this.mood > this.tollerance) {
      return "happy"
    }
    if (this.mood > 0) {
      return "meh"
    }
    return "Bitey"
  }
  get Template() {
    debugger
    return `
    <div class="card">
      <img class="card-img-top" src="${this.img}" alt="">
      <div class="card-body">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">${this.pets}</p>
          <p class="card-text">${this.moodString()}</p>
          <button onclick="app.catsController.pet()" >Pet</button>
      </div>
    </div>

    `
  }
}