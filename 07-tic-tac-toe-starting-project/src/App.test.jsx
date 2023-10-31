import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

// test App render Start Game button before game start
describe('App', () => {
  it('should render Start Game button before game start', () => {
    render(<App />);
    const startGameButton = screen.getByText(/Start Game/i);
    console.log(startGameButton);
  });
});

// should display the game-container after clicking on the Start Game button
describe('App', () => {
  it('should display the game-container after clicking on the Start Game button', () => {
    render(<App />);
    const startGameButton = screen.getByText(/Start Game/i);
    fireEvent.click(startGameButton);
    console.log("SCREEN", screen);
    const gameBoard = screen.getByTestId('game-container');
    console.log("GAMEBOARD", gameBoard);
    // expect(gameBoard).toBeInTheDocument();
  });
});