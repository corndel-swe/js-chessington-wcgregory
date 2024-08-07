import Square from '../square.js'
import Piece from './piece.js'

export default class King extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    const possibleMoves = Array()
    const moves = Array()

    // can move "up" by one, if on the board
    if (location.row + 1 <= 7) {
      possibleMoves.push(new Square(location.row + 1, location.col))
    }
    // can move "down" by one, if on the board
    if (location.row - 1 >= 0) {
      possibleMoves.push(new Square(location.row - 1, location.col))
    }
    // can move "right" by one, if on the board
    if (location.col + 1 <= 7) {
      possibleMoves.push(new Square(location.row, location.col + 1))
    }
    // can move "left" by one, if on the board
    if (location.col - 1 >= 0) {
      possibleMoves.push(new Square(location.row, location.col - 1))
    }
    // can move "north-east" by one
    if (location.col + 1 <= 7 && location.col + 1 <= 7) {
      possibleMoves.push(new Square(location.row + 1, location.col + 1))
    }
    // can move "south-east" by one
    if (location.col - 1 >= 0 && location.col + 1 <= 7) {
      possibleMoves.push(new Square(location.row - 1, location.col + 1))
    }
    // can move "south-west" by one
    if (location.col - 1 >= 0 && location.col - 1 >= 0) {
      possibleMoves.push(new Square(location.row - 1, location.col - 1))
    }
    // can move "north-west" by one
    if (location.col + 1 <= 7 && location.col - 1 >= 0) {
      moves.push(new Square(location.row + 1, location.col - 1))
    }

    for (let move of possibleMoves) {
      if (!board.getPiece(move)) {
        moves.push(move)      
      } else {
        const occupyingPiece = board.getPiece(move)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(move)
        }
      }
    }

    return moves
  }

}
