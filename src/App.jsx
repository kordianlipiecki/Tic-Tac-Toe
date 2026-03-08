import './App.css'
import { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function Square({value,onSquareClick}) {
  return(
  <button className="square" onClick={onSquareClick}>
    {value}
  </button>
  )
}

function Board(){
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [xIsNext,setXIsNext] = useState(true);
  const winner = calculateWinner(squares)
  let status;
    if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    
    if (xIsNext) {
      nextSquares[i] = "X"
    }else {
      nextSquares[i] = "O"
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }


  return(
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <h1>{status}</h1>
      </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

function calculateWinner(symbolSquare) {  //I create a calculate winner function that has a squares parameter
  const lines = [  //here are all the combinations that win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {  // for loop that increments i for the length of the lines (8 combinations)
    const [a, b, c] = lines[i]; // assinging elemts from lines[1-8] to abc 
    if (symbolSquare[a] && symbolSquare[a] === symbolSquare[b] && symbolSquare[a] === symbolSquare[c]) { //checing if all of the are the same
      return symbolSquare[a]; //
    }
  }
    return null;
}

export default Board
