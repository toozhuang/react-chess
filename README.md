# Chess Question

## Abstract
You have been provided with a third-party library `src/libs` which calculates the legal moves a knight can make given a position on an ![8\times8](https://latex.codecogs.com/svg.latex?8%5Ctimes8) board. The library has been used to create a program which moves a knight randomly around a board, given an initial starting position and a total number of moves to make.

## Problem
Extend this program to set up an ![8\times8](https://latex.codecogs.com/svg.latex?8%5Ctimes8) square game board containing several different pieces in predefined positions.
For each move of the game, the program will choose a piece at random, and move it to a randomly selected valid position.

You are not allowed to change any of the `src/libs` code.
 
Extend the program as required. Write your UI answer to `src/components/ComplexGame.js`.

## Game Rules
* Only one piece can occupy any position on the board at a given time.
* All pieces can “jump” any occupied position.

*__Note__*: Although the game bears a striking resemblance to Chess, this is entirely coincidental. Do not assume other chess rules apply.

## Game Pieces to support:
* Knight - Moves as implemented by ChessLib
* Bishop - Moves diagonally, any distance within board boundaries
* Queen – Moves diagonally, horizontally or vertically, any distance within board boundaries


