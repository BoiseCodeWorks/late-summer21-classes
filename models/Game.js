
import Upgrade from './Upgrade.js'

// // NOTE the 'new' keyword instantiates (creates) an object of that type
// let pick = new Upgrade('pick', 10, 3)
let upgrades = {
  click: {
    /** @type {Upgrade} */
    pick: new Upgrade('pick', 10, 1),
    /** @type {Upgrade} */
    cart: new Upgrade('cart', 100, 5)
  },
  auto: {
    /** @type {Upgrade} */
    mouse: new Upgrade('mouse', 150, 3),
    /** @type {Upgrade} */
    drill: new Upgrade('drill', 200, 15)
  }
}
let cheese = 0

export default class Game {
  // called by the button click
  buy(type, name) {
    cheese = upgrades[type][name].buy(cheese)
  }

  mine() {
    cheese++
    for (let key in upgrades.click) {
      cheese += upgrades.click[key].total()
    }
    console.log(cheese)
  }
}