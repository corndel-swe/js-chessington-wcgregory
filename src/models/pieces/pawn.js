import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
      // white pawns can move "up" by two if at row poition 1
      if (location.row === 1) {
        moves.push(new Square(location.row + 2, location.col))
      }
      // white pawns can move "up" by one, except at the "top" of board
      if (location.row !== 7) {
        moves.push(new Square(location.row + 1, location.col))
      }
    } else {
      // black pawns can move "down" by one, except at the "bottom" of board
      if (location.row !== 0) {
        moves.push(new Square(location.row - 1, location.col))
      }
      // black pawns can move "down" by two if at row poition 6
      if (location.row === 6) {
        moves.push(new Square(location.row - 2, location.col))
      }
    }

    return moves
  }
  
}
