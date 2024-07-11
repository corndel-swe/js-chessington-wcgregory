export default class Maths {
  
  // static property PI
  static PI = 3.14
  
  // static method max
  static max(a, b) {
    if (a > b) return a
	  return b
}

	round(number) {
	  //return number
		return Math.round(number)
	}

}

// console.log(Maths.PI)
// console.log(Maths.max(6, 4))
