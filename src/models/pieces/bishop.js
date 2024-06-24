import Square from '../square.js'
import Piece from './piece.js'

export default class Bishop {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    let moves = []

    for (let idx = 1; idx <= 7; idx++) {
      if (location.row + idx <= 7 && location.col + idx <= 7 ) {  
        moves.push(new Square(location.row + idx, location.col + idx))
      }
    }

    for (let idx = 1; idx <= 7; idx++) {
      if (location.row - idx >= 0 && location.col + idx <= 7 ) {
        moves.push(new Square(location.row - idx, location.col + idx))
      }
    }

    for (let idx = 1; idx <= 7; idx++) {
      if (location.row - idx >= 0 && location.col - idx >= 0 ) {
        moves.push(new Square(location.row - idx, location.col - idx))
      }
    }

    for (let idx = 1; idx <= 7; idx++) {
      if (location.row + idx <= 7 && location.col - idx >= 0 ) {
        moves.push(new Square(location.row + idx, location.col - idx))
      }
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
