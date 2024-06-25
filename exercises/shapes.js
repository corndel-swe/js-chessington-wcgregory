export class Shape {
  area() {
    throw new Error('This method should be overwritten')
  }

  perimeter() {
    throw new Error('This method should be overwritten')
  }
}

// Exercise 3: Make Rectangle, Triangle, and Circle child classes of Shape
// And override the getArea and getPerimeter methods

export class Rectangle extends Shape {
  #width
  #height

  constructor(width, height) {
    super()
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

export class RightTriangle extends Shape {
  #base
  #height

  constructor(base, height) {
    super()
    this.#base = base
    this.#height = height
  }

  base() {
    return this.#base
  }

  height() {
    return this.#height
  }

  hypotenuse() {
    return Math.sqrt(this.#base ** 2 + this.#height ** 2)
  }

  area() {
    return (this.#base * this.#height) / 2
  }

  perimeter() {
    return this.#base + this.#height + this.hypotenuse()
  }

}

export class Circle extends Shape {
  static PI = 3.14
  #radius

  constructor(radius) {
    super()
    this.#radius = radius
    this.PI = 3.14
  }

  radius() {
    return this.#radius
  }

  area() {
    // A = PI * r squared
    return this.PI * (this.#radius * this.#radius)
  }

  perimeter() {
    // perimeter/circumference = 2 * PI * r
    return 2 * Circle.PI * this.#radius
  }

}

// const myRect = new Rectangle(2, 4)
// console.log(myRect.area())

// const myTri = new RightTriangle(2, 4)
// console.log(myTri.area())

// const myCir = new Circle(5)
// console.log(myCir.area())
