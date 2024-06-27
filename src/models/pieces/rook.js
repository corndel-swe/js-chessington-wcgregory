import Player from '../player.js'
import Square from '../square.js'
import Piece from './piece.js'

export default class Rook extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    let moves = []

    for (let idx = 1; idx <= 7; idx++) {
      // Move up the rows, break if space occupied by friendly piece
      if (location.row + idx <= 7)  {

        if (!board.getPiece(new Square(location.row + idx, location.col))) {
          moves.push(new Square(location.row + idx, location.col))

        } else if (board.getPiece(new Square(location.row + idx, location.col))) {
          const occupyingPiece = board.getPiece(new Square(location.row + idx, location.col))
          if (occupyingPiece.player === this.player) {
            break
          }
        }
      }
      // Move down the rows, break if space occupied by friendly piece
      if (location.row - idx >= 0) {
        if (!board.getPiece(new Square(location.row - idx, location.col))) {
          moves.push(new Square(location.row - idx, location.col))

        } else if (board.getPiece(new Square(location.row - idx, location.col))) {
          const occupyingPiece = board.getPiece(new Square(location.row - idx, location.col))
          if (occupyingPiece.player === this.player) {
            break
          }
        }
      }
      // Move along the columns, to the right, break if space occupied by friendly piece
      if (location.col + idx <= 7) {
        if (!board.getPiece(new Square(location.row, location.col  + idx))) {
          moves.push(new Square(location.row, location.col  + idx))

        } else if (board.getPiece(new Square(location.row, location.col + idx))) {
          const occupyingPiece = board.getPiece(new Square(location.row, location.col  + idx))
          if (occupyingPiece.player === this.player) {
            break
          }
        }
      }
      // Move along the columns, to the left, break if space occupied by friendly piece
      if (location.col - idx >= 0 ) {
        if (!board.getPiece(new Square(location.row, location.col  - idx))) {
          moves.push(new Square(location.row, location.col  - idx))

        } else if (board.getPiece(new Square(location.row, location.col - idx))) {
          const occupyingPiece = board.getPiece(new Square(location.row, location.col  - idx))
          if (occupyingPiece.player === this.player) {
            break
          }
        }
      }

    }

    return moves
  }
  
}
