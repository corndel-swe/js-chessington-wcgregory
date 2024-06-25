import Square from '../square.js'
import Piece from './piece.js'

export default class Queen extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    let moves = Array()

    // TODO

    return moves
  }

}
