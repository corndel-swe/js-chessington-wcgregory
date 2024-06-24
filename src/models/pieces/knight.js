import Square from '../square.js'
import Piece from './piece.js'

export default class Knight {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    // can move "north-east" as a knight up 2 right 1
    if (location.row + 2 <= 7 && location.col + 1 <= 7) {
      moves.push(new Square(location.row + 2, location.col + 1))
    }
    // can move "north-east" as a knight up 1 right 2
    if (location.row + 1 <= 7 && location.col + 2 <= 7) {
      moves.push(new Square(location.row + 1, location.col + 2))
    }
    // can move "south-east" as a knight down 2 right 1
    if (location.row - 2 >= 0 && location.col + 1 <= 7) {
      moves.push(new Square(location.row - 2, location.col + 1))
    }
    // can move "south-east" as a knight down 1 right 2
    if (location.row - 1 >= 0 && location.col + 2 <= 7) {
      moves.push(new Square(location.row - 1, location.col + 2))
    }
    // can move "south-west" as a knight down 2 left 1
    if (location.row - 2 >= 0 && location.col - 1 >= 0) {
      moves.push(new Square(location.row - 2, location.col - 1))
    }
    // can move "south-west" as a knight down 1 left 2
    if (location.row - 1 >= 0 && location.col - 2 >= 0) {
      moves.push(new Square(location.row - 1, location.col - 2))
    }
    // can move "north-west" as a knight up 2 left 1
    if (location.row + 2 <= 7 && location.col - 1 >= 0) {
      moves.push(new Square(location.row + 2, location.col - 1))
    }
    // can move "north-west" as a knight up 1 left 2
    if (location.row + 1 <= 7 && location.col - 2 >= 0) {
      moves.push(new Square(location.row + 1, location.col - 2))
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
