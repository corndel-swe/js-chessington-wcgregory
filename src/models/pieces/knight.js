import Square from '../square.js'
import Piece from './piece.js'
import King from './king.js'

export default class Knight extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of possible moves
    const possibleKnightMoves = Array()
    // the list of valid moves
    const moves = Array()

    if (location.row + 2 <= 7 && location.col + 1 <= 7) {  // can move "north-east" as a knight up 2 right 1
      let knightmove = new Square(location.row + 2, location.col + 1)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row + 1 <= 7 && location.col + 2 <= 7) {  // move "north-east" as a knight up 1 right 2
      let knightmove = new Square(location.row + 1, location.col + 2)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row - 2 >= 0 && location.col + 1 <= 7) {  // can move "south-east" as a knight down 2 right 1
      let knightmove = new Square(location.row - 2, location.col + 1)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row - 1 >= 0 && location.col + 2 <= 7) {  // can move "south-east" as a knight down 1 right 2
      let knightmove = new Square(location.row - 1, location.col + 2)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row - 2 >= 0 && location.col - 1 >= 0) {  // can move "south-west" as a knight down 2 left 1
      let knightmove = new Square(location.row - 2, location.col - 1)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row - 1 >= 0 && location.col - 2 >= 0) {  // can move "south-west" as a knight down 1 left 2
      let knightmove = new Square(location.row - 1, location.col - 2)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row + 2 <= 7 && location.col - 1 >= 0) {  // can move "north-west" as a knight up 2 left 1
      let knightmove = new Square(location.row + 2, location.col - 1)
      possibleKnightMoves.push(knightmove)
    }
    if (location.row + 1 <= 7 && location.col - 2 >= 0) {  // can move "north-west" as a knight up 1 left 2
      let knightmove = new Square(location.row + 1, location.col - 2)
      possibleKnightMoves.push(knightmove)
    }

    for (let move of possibleKnightMoves) {
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
