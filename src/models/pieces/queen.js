import Square from '../square.js'
import Piece from './piece.js'
import King from './king.js'

export default class Queen extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    let moves = Array()

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
      // squares available in the "north-east" direction if not occupied, break if occupied by friendly piece
      if (location.row + idx <= 7 && location.col + idx <= 7) {
        const northEastSquare = new Square(location.row + idx, location.col + idx)

        if (!board.getPiece(northEastSquare)) {
          moves.push(northEastSquare)
        
        } else {
          const occupyingPiece = board.getPiece(northEastSquare)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(northEastSquare)
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
