// PreGame.jsx
import React from 'react';

const PreGame = ({ startGame, handleSymbolChange, symbol1, symbol2 }) => {
    return (
        <div id="pre-game">
            <h1>Do you want to play tic tac toe ?</h1>

            <form onSubmit={startGame}>
                <button>Start Game</button>
                <div className="symbol-edit">
                    <input name="player1" type="text" value={symbol1} onChange={handleSymbolChange} /> VS
                    <input name="player2" type="text" value={symbol2} onChange={handleSymbolChange} />
                </div>
            </form>
        </div>
    );
};

export default PreGame;