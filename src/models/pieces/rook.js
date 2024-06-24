import Square from '../square.js'
import Piece from './piece.js'

export default class Rook {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)
    
    // the list of valid moves
    let moves = []

    // Move along the rows, up the rows
    for (let idx = 1; idx <= 7; idx++) {
      if (location.row + idx <= 7) {  
        moves.push(new Square(location.row + idx, location.col))
      }
    }

    // Move along the rows, down the rows
    for (let idx = 1; idx <= 7; idx++) {
      if (location.row - idx >= 0) {  
        moves.push(new Square(location.row - idx, location.col))
      }
    }

    // Move along the columns, up the columns
    for (let idx = 1; idx <= 7; idx++) {
      if (location.col + idx <= 7) {
        moves.push(new Square(location.row, location.col + idx))
      }
    }

    // Move along the columns, down the columns
    for (let idx = 1; idx <= 7; idx++) {
      if (location.col - idx >= 0 ) {
        moves.push(new Square(location.row, location.col - idx))
      }
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
