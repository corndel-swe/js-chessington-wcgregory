// Make your Counter class here
class Counter {
  #count  // private property

  constructor (startingCountInt) {
    this.#count = startingCountInt ? startingCountInt : 0
  }

  increment() {
    this.#count++
  }

  reset() {
    this.setCount(0)
  }

  setCount(intValue) {
    this.#count = Number(intValue) ? Number(intValue) : 0
  }
  getCount() {
    return this.#count
  }

}

// Replace `null` with an _instance_ of your counter
const counterInstance = new Counter()

// Please don't change the lines below!
export { Counter, counterInstance }
