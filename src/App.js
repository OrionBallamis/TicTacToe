import './App.css';
import react, { useState } from 'react';
import Square from "./Components/square"


function App() {
  let checkMark = '';

  const [turn, setTurn] = useState('x')
  const [squares, setSquares] = useState(['','','','','','','','',''])
  const [winner, setWinner] = useState()
  
  const checkForWinner = (squares) => {
    let win = {
      across: [
        [0,1,2],
        [3,4,5],
        [6,7,8]
      ],
      down: [
        [0,3,6],
        [1,4,7],
        [2,5,8]
      ],
      diagnol: [
        [0,4,8],
        [2,4,6]
      ]
    }
    for(let combo in win){
      win[combo].forEach((pattern) => {
        console.log(pattern)
        if(
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === '' 
        ){

        } else if(
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
          ){
            setWinner(squares[pattern[0]])
        }
      })
    }
  }

  const playerMark = (num) => {
    let newSquares = [...squares]

    if(squares[num] !== ''){
      return
    }

    if(turn === 'x'){
      newSquares[num] = 'X'
      setTurn('o')
      setSquares(newSquares)
    } else {
      newSquares[num] = 'O'
      setTurn('x')
      setSquares(newSquares)
    }
    checkForWinner(squares)
    console.log(squares)
  }

  const handleReset = () => {
    setSquares(['','','','','','','','',''])
    setWinner(null)
  }

  return (
    <div className="Tic-Tac-Toe-board">
        turn:{turn}
      <table>
        <tbody>
          <tr>
            <Square squares={squares} num={0} checkBox={checkMark} playerMark={playerMark}></Square>
            <Square squares={squares} num={1} checkBox={checkMark} playerMark={playerMark}></Square>
            <Square squares={squares} num={2} checkBox={checkMark} playerMark={playerMark}></Square>
          </tr>
          <tr>
            <Square squares={squares} num={3} checkBox={checkMark} playerMark={playerMark}></Square>
            <Square squares={squares} num={4} checkBox={checkMark} playerMark={playerMark}></Square>
            <Square squares={squares} num={5} checkBox={checkMark} playerMark={playerMark}></Square>
          </tr>
          <tr>
            <Square squares={squares} num={6} checkBox={checkMark} playerMark={playerMark}></Square>
            <Square squares={squares} num={7} checkBox={checkMark} playerMark={playerMark}></Square>
            <Square squares={squares} num={8} checkBox={checkMark} playerMark={playerMark}></Square>
          </tr>
        </tbody>  
      </table>
      {winner && (
        <>
        <p>{winner} is the winner!!</p>
        <button onClick={() => handleReset}>Play Again</button>
        </>
      )}
    </div>
  );
}

export default App;
