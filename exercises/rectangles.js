export class Rectangle {
  #width
  #height

  constructor(width, height) {
    this.#width = width
    this.#height = height
  }

  area() {
    return this.#width * this.#height
  }

  perimeter() {
    return 2 * (this.#width + this.#height)
  }

  width() {
    return this.#width
  }

  height() {
    return this.#height
  }
}

export class Square extends Rectangle {

  constructor(side) {
    super(side, side)
  }

}

//const mySquare = new Square(2)
//console.log(mySquare.area())
//console.log(mySquare.perimeter())
//console.log(mySquare.width())
//console.log(mySquare.height())

//mySquare.side = 3
//console.log(mySquare.width())
