import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import {calculateWinner} from '../logic'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) =>{
        const boardCopy = [...board]
        if(winner || boardCopy[index]){
            return null;
        }
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () =>{
        return(
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Clear the field</button>
        )
    }

    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={handleClick}/>
            <p className="game_info">
                {winner ? 'Winner ' + winner : 'now it\'s ' + (xIsNext ? 'X' : 'O') + '\'s turn ' }
            </p>
                    </div>
    );
}

export default Game;
