import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'
import King from './king.js'

export default class Pawn extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // possible diagonal move if occupied by opposition piece
    const diagonalMove = Array()
    // the list of valid moves
    const moves = Array()

    if (this.player === Player.WHITE) {
      // white pawns can move "up" by two if at row poition 1, but not if space is occupied
      if (location.row === 1) {
        if (
          !board.getPiece(new Square(location.row + 1, location.col)) &&
          !board.getPiece(new Square(location.row + 2, location.col))
        ) {
          moves.push(new Square(location.row + 1, location.col))
          moves.push(new Square(location.row + 2, location.col))
          
        } else if (!board.getPiece(new Square(location.row + 1, location.col))) {
          moves.push(new Square(location.row + 1, location.col))
        }
      // white pawns can move "up" by one, except at the "top" of board (row 7) and not if space is occupied
      } else if (location.row < 7) {
        
        if (!board.getPiece(new Square(location.row + 1, location.col))) {
          moves.push(new Square(location.row + 1, location.col))
        }
      }
      // can move diagonally up if there is an opposite piece, except the opposing king
      if (location.row < 7 && location.col < 7) {  // up-right
        diagonalMove.push(new Square(location.row + 1, location.col + 1))
      }
      if (location.row < 7 && location.col > 0) {  // up-left
        diagonalMove.push(new Square(location.row + 1, location.col - 1))
      }
      for (let move of diagonalMove) {
        if (board.getPiece(move)) {
          const occupyingPiece = board.getPiece(move)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(move)
          }
        }
      }
    // this.player !== player.WHITE
    } else {
      // black pawns can move "down" by one or two if at row position 6, but not if space is occupied
      if (location.row === 6) {

        if (
          !board.getPiece(new Square(location.row - 1, location.col)) &&
          !board.getPiece(new Square(location.row - 2, location.col))
        ) {
          moves.push(new Square(location.row - 1, location.col))
          moves.push(new Square(location.row - 2, location.col))

        } else if (!board.getPiece(new Square(location.row - 1, location.col))) {
          moves.push(new Square(location.row - 1, location.col))
        }
      // else can move "down" by one if not at bottom of board (row 0) and not if space is occupied
      } else if (location.row > 0) {

        if (!board.getPiece(new Square(location.row - 1, location.col))) {  
          moves.push(new Square(location.row - 1, location.col))
        }
      }
      // can move diagonally down if there is an opposite piece, except the opposing king
      if (location.row > 0 && location.col < 7) {  // down-right
        diagonalMove.push(new Square(location.row - 1, location.col + 1))
      }
      if (location.row > 0 && location.col > 0) {  // down-left
        diagonalMove.push(new Square(location.row - 1, location.col - 1))
      }
      for (let move of diagonalMove) {
        if (board.getPiece(move)) {
          const occupyingPiece = board.getPiece(move)
          if (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
            moves.push(move)
          }
        }
      }
    }
    // if (this.player === Player.BLACK) console.log(moves)
    return moves
  }
  
}
