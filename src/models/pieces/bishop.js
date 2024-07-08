import Square from '../square.js'
import Piece from './piece.js'
import King from './king.js'

export default class Bishop extends Piece {

  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    const moves = Array()

    for (let idx = 1; idx <= 7; idx++) {
      // squares available in the "north-east" direction if not occupied, break if occupied by friendly piece
      if (location.row + idx <= 7 && location.col + idx <= 7) {
        let northEastSquare = new Square(location.row + idx, location.col + idx)

        if (!board.getPiece(northEastSquare)) {
          moves.push(northEastSquare)
        
        } else {
          const occupyingPiece = board.getPiece(northEastSquare)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(northEastSquare)
          } break
        }
      }
      // squares available in "south-east" direction if not occupied, break if occupied by friendly piece
      if (location.row - idx >= 0 && location.col + idx <= 7) {
        let southEastSquare = new Square(location.row - idx, location.col + idx)

        if (!board.getPiece(southEastSquare)) {
          moves.push(southEastSquare)
        
        } else {
          const occupyingPiece = board.getPiece(southEastSquare)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(southEastSquare)
          } break
        }
      }
      // moves available in "south-west" direction if not occupied, break if occupied by friendly piece
      if (location.row - idx >= 0 && location.col - idx >= 0) {
        let southWestSquare = new Square(location.row - idx, location.col - idx)

        if (!board.getPiece(southWestSquare)) {
          moves.push(southWestSquare)
        
        } else {
          const occupyingPiece = board.getPiece(southWestSquare)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(southWestSquare)
          } break
        }
      }
      // moves available in "north-west" direction if not occupied, break if occupied by friendly piece
      if (location.row + idx <= 7 && location.col - idx >= 0) {
        let northWestSquare = new Square(location.row + idx, location.col - idx)

        if (!board.getPiece(northWestSquare)) {
          moves.push(northWestSquare)
        
        } else {
          const occupyingPiece = board.getPiece(northWestSquare)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(northWestSquare)
          } break
        }
      }
    }

    return moves
  }

  
}
