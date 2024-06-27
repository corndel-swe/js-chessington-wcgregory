import { strict as assert } from 'assert'
import Queen from '../../../src/models/pieces/queen.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'
import Board from '../../../src/models/board.js'

describe('Queen', () => {
  let board
  beforeEach(() => (board = new Board()))

	xit('can move diagonally', () => {
    const whiteQueen = new Queen(Player.WHITE)
    board.setPiece(new Square(4, 3), whiteQueen)

    const moves = whiteQueen.getAvailableMoves(board)

    const expectedMoves = [
      // Forwards diagonal
      new Square(0, 1),
      new Square(1, 4),
      new Square(3, 4),
      new Square(4, 5),
      new Square(5, 6),
      new Square(6, 7),
      // Backwards diagonal
      new Square(0, 5),
      new Square(1, 4),
      new Square(3, 4),
      new Square(4, 1),
      new Square(5, 0)
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

	xit('can move laterally, i.e. up, down, left, right', () => {
    const blkQueen = new Queen(Player.BLACK)
    board.setPiece(new Square(3, 4), blkQueen)

    const moves = blkQueen.getAvailableMoves(board)

    const expectedMoves = [
      // Horizontal
      new Square(1, 0),
      new Square(1, 1),
      new Square(1, 2),
      new Square(1, 3),
      new Square(1, 5),
      new Square(1, 6),
      new Square(1, 7),
      // Vertical
      new Square(0, 4),
      new Square(1, 4),
      new Square(2, 4),
      new Square(4, 4),
      new Square(5, 4),
      new Square(6, 4),
      new Square(7, 4)
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })
})
