import Player from '../player.js'
import Square from '../square.js'
import Piece from './piece.js'
import King from './king.js'

export default class Rook extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    const location = board.findPiece(this)
    
    // the list of valid moves
    const moves = []

    for (let idx = 1; idx <= 7; idx++) {
      // squares available in the "north-bound" direction if not occupied, break if occupied by friendly piece
      if (location.row + idx <= 7)  {
        const northBound = new Square(location.row + idx, location.col)

        if (!board.getPiece(northBound)) {
          moves.push(northBound)

        } else {
          const occupyingPiece = board.getPiece(northBound)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(northBound)
          } break
        }
      }
      // squares available in the "easterly" direction if not occupied, break if occupied by friendly piece
      if (location.col + idx <= 7)  {
        const easterly = new Square(location.row, location.col + idx)

        if (!board.getPiece(easterly)) {
          moves.push(easterly)

        } else {
          const occupyingPiece = board.getPiece(easterly)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(easterly)
          } break
        }
      }
      // squares available in the "south-bound" direction if not occupied, break if occupied by friendly piece
      if (location.row - idx >= 0)  {
        const southBound = new Square(location.row - idx, location.col)

        if (!board.getPiece(southBound)) {
          moves.push(southBound)

        } else {
          const occupyingPiece = board.getPiece(southBound)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(southBound)
          } break
        }
      }
      // squares available in the "westerly" direction if not occupied, break if occupied by friendly piece
      if (location.col - idx >= 0)  {
        const westerly = new Square(location.row, location.col - idx)

        if (!board.getPiece(westerly)) {
          moves.push(westerly)

        } else {
          const occupyingPiece = board.getPiece(westerly)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(westerly)
          } break
        }
      }
    }

    return moves
  }
  
}
