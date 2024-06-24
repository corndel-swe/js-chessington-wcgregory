import Square from '../square.js'
import Piece from './piece.js'

export default class King {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    moves.push(new Square(location.row + 1, location.col))
    // can move "down" by one
    moves.push(new Square(location.row - 1, location.col))
    // can move "right" by one
    moves.push(new Square(location.row, location.col + 1))
    // can move "left" by one
    moves.push(new Square(location.row, location.col - 1))
    // can move "north-east" by one
    moves.push(new Square(location.row + 1, location.col + 1))
    // can move "south-east" by one
    moves.push(new Square(location.row - 1, location.col + 1))
    // can move "south-west" by one
    moves.push(new Square(location.row - 1, location.col - 1))
    // can move "north-west" by one
    moves.push(new Square(location.row + 1, location.col - 1))

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
