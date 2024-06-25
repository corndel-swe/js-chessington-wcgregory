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
    const moves = Array()

    if (this.player === Player.WHITE) {
      // white pawns can move "up" by two if at row poition 1
      if (location.row === 1) {
        let newLocation = new Square(location.row + 2, location.col)
        if (!board.getPiece(newLocation)) {  // ignore if space is occupied
          moves.push(newLocation)
        }
      }
      // white pawns can move "up" by one, except at the "top" of board
      if (location.row < 7) {
        let newLocation = new Square(location.row + 1, location.col)
        if (!board.getPiece(newLocation)) {  // ignore if space is occupied
          moves.push(newLocation)
        }
      }
    } else {
      // black pawns can move "down" by one, except at the "bottom" of board
      if (location.row > 0) {
        let newLocation = new Square(location.row - 1, location.col)
        if (!board.getPiece(newLocation)) {  // ignore if space is occupied
          moves.push(newLocation)
        }
      }
      // black pawns can move "down" by two if at row poition 6
      if (location.row === 6) {
        let newLocation = new Square(location.row - 2, location.col)
        if (!board.getPiece(newLocation)) {  // ignore if space is occupied
          moves.push(newLocation)
        } else console.log(board.getPiece(newLocation))
      }
    }

    return moves
  }
  
}
