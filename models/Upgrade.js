export default class Upgrade {
  // constructor method is called at object instantiation
  /**
   * An upgrade object for the MoonMiner Game
   * @param {String} name 
   * @param {Number} price 
   * @param {Number} multiplier 
   */
  constructor(name, price, multiplier) {
    // the 'this' keyword is a reference to object that is being created
    // (whatever is left of the '.' at call time)
    // ex: pick.name (pick is the 'this' context)
    this.name = name
    this.id = name + '-btn'
    this.price = price
    this.multiplier = multiplier
    // NOTE you may have hard-coded values that do not require a parameter
    this.quantity = 0
  }

  total() {
    // NOTE when accessing other methods or properties of the class,
    // you must use the 'this' keyword
    return this.quantity * this.multiplier + q
  }

  buy(cheese) {
    if (cheese >= this.price) {
      cheese -= this.price
      this.quantity++
      this.price = Math.floor(this.price * 1.5)
      console.log("SOLD", this.name)
    }
    else {
      console.error("invalid cheese")
    }
    return cheese
  }
}