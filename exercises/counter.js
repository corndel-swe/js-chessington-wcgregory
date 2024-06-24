// Make your Counter class here
class Counter {
  // implementation here
  constructor (startingCountInt) {
    this.count = startingCountInt ? startingCountInt : 0
  }

  increment() {
    this.count++
  }

  reset() {
    this.count = 0
  }

  getCount() {
    return this.count
  }

}

// Replace `null` with an _instance_ of your counter
const counterInstance = new Counter()

// Please don't change the lines below!
export { Counter, counterInstance }
