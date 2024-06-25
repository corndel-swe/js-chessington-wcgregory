import Square from '../square.js'
import Piece from './piece.js'

export default class Bishop extends Piece {

  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    let moves = []

    for (let idx = 1; idx <= 7; idx++) {
      // moves available in "north-east" direction
      if (location.row + idx <= 7 && location.col + idx <= 7) {  
        moves.push(new Square(location.row + idx, location.col + idx))
      }
      // moves available in "south-east" direction
      if (location.row - idx >= 0 && location.col + idx <= 7) {
        moves.push(new Square(location.row - idx, location.col + idx))
      }
      // moves available in "south-west" direction
      if (location.row - idx >= 0 && location.col - idx >= 0) {
        moves.push(new Square(location.row - idx, location.col - idx))
      }
      // moves available in "north-west" direction
      if (location.row + idx <= 7 && location.col - idx >= 0) {
        moves.push(new Square(location.row + idx, location.col - idx))
      }
    }

    return moves
  }
  
}
