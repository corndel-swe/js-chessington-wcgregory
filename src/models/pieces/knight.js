import Square from '../square.js'
import Piece from './piece.js'
import King from './king.js'

export default class Knight extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    const moves = Array()

    // can move "north-east" as a knight up 2 right 1
    if (location.row + 2 <= 7 && location.col + 1 <= 7) {
      const possibleKnightMove = new Square(location.row + 2, location.col + 1)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "north-east" as a knight up 1 right 2
    if (location.row + 1 <= 7 && location.col + 2 <= 7) {
      const possibleKnightMove = new Square(location.row + 1, location.col + 2)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "south-east" as a knight down 2 right 1
    if (location.row - 2 >= 0 && location.col + 1 <= 7) {
      const possibleKnightMove = new Square(location.row - 2, location.col + 1)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "south-east" as a knight down 1 right 2
    if (location.row - 1 >= 0 && location.col + 2 <= 7) {
      const possibleKnightMove = new Square(location.row - 1, location.col + 2)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "south-west" as a knight down 2 left 1
    if (location.row - 2 >= 0 && location.col - 1 >= 0) {
      const possibleKnightMove = new Square(location.row - 2, location.col - 1)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "south-west" as a knight down 1 left 2
    if (location.row - 1 >= 0 && location.col - 2 >= 0) {
      const possibleKnightMove = new Square(location.row - 1, location.col - 2)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "north-west" as a knight up 2 left 1
    if (location.row + 2 <= 7 && location.col - 1 >= 0) {
      const possibleKnightMove = new Square(location.row + 2, location.col - 1)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }
    // can move "north-west" as a knight up 1 left 2
    if (location.row + 1 <= 7 && location.col - 2 >= 0) {
      const possibleKnightMove = new Square(location.row + 1, location.col - 2)

      if (!board.getPiece(possibleKnightMove)) {
        moves.push(possibleKnightMove)
      } else {
        const occupyingPiece = board.getPiece(possibleKnightMove)
        if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
          moves.push(possibleKnightMove)
        }
      }
    }

    return moves
  }

}
