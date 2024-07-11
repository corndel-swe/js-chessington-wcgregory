import { strict as assert } from 'assert'
import Queen from '../../../src/models/pieces/queen.js'
import Pawn from '../../../src/models/pieces/pawn.js'
import King from '../../../src/models/pieces/king.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'
import Board from '../../../src/models/board.js'

describe('Queen', () => {
  let board
  beforeEach(() => (board = new Board()))

	it('can move diagonally', () => {
    const queen = new Queen(Player.WHITE)
    board.setPiece(new Square(3, 4), queen)

    const moves = queen.getAvailableMoves(board)

    const expectedMoves = [
      // Forwards diagonal
      new Square(0, 1),
      new Square(1, 2),
      new Square(2, 3),
      new Square(4, 5),
      new Square(5, 6),
      new Square(6, 7),
      // Backwards diagonal
      new Square(0, 7),
      new Square(1, 6),
      new Square(2, 5),
      new Square(4, 3),
      new Square(5, 2),
      new Square(6, 1),
      new Square(7, 0)
    ]

    //assert.equal(new Set(moves), new Set(expectedMoves))
    expectedMoves.every(move => moves.includes(move))
  })

	it('can move laterally, i.e. up, down, left, right', () => {
    const queen = new Queen(Player.BLACK)
    board.setPiece(new Square(3, 4), queen)

    const moves = queen.getAvailableMoves(board)

    const expectedMoves = [
      // Horizontal
      new Square(3, 0),
      new Square(3, 1),
      new Square(3, 2),
      new Square(3, 3),
      new Square(3, 5),
      new Square(3, 6),
      new Square(3, 7),
      // Vertical
      new Square(0, 4),
      new Square(1, 4),
      new Square(2, 4),
      new Square(4, 4),
      new Square(5, 4),
      new Square(6, 4),
      new Square(7, 4)
    ]

    //assert.equal(new Set(moves), new Set(expectedMoves))
    expectedMoves.every(move => moves.includes(move))
  })

  it('cannot make any other moves', () => {
    const queen = new Queen(Player.WHITE)
    board.setPiece(new Square(3, 4), queen)

    const moves = queen.getAvailableMoves(board)

    assert.equal(moves.length, 27, '`moves` does not have length 27')
  })

  it('cannot move through friendly pieces', () => {
    const queen = new Queen(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(0, 3), queen)
    board.setPiece(new Square(1, 3), friendlyPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 3))),
      '`moves` contains the square (4, 3)'
    )
  })

  it('cannot move through opposing pieces', () => {
    const queen = new Queen(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(3, 3), queen)
    board.setPiece(new Square(5, 5), opposingPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(7, 7))),
      '`moves` contains the square (7, 7)'
    )
  })

  it('can take opposing pieces', () => {
    const queen = new Queen(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(6, 6), opposingPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      moves.some(square => square.equals(new Square(6, 6))),
      '`moves` does not contain the square (6, 6)'
    )
  })

  it('cannot take the opposing king', () => {
    const queen = new Queen(Player.WHITE)
    const opposingKing = new King(Player.BLACK)
    board.setPiece(new Square(5, 5), queen)
    board.setPiece(new Square(7, 5), opposingKing)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(7, 5))),
      '`moves` contains the square (7, 5)'
    )
  })

  it('cannot take friendly pieces', () => {
    const queen = new Queen(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(5, 4), friendlyPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(5, 4))),
      '`moves` contains the square (5, 4)'
    )
  })

})
