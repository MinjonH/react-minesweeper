import React, { useState, useEffect } from 'react';
import createBoard from '../utilities/createboard';
import Cell from './Cell';
import { revealed } from '../utilities/reveal';
import TopBar from './TopBar';
import Modal from './Modal';

export default function Board() {
	const [board, setBoard] = useState([]);
	const [mineLocations, setMineLocations] = useState([]);
	const [nonMinesCount, setNonMinesCount] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [restart, setRestart] = useState(false);
	const [newTime, setTime] = useState(0);

	useEffect(() => {
		// create the board
		const generateBoard = () => {
			const getBoard = createBoard(10, 15, 20, setMineLocations);
			setNonMinesCount(100 - 20);
			setTime(0);
			setBoard(getBoard.board);
			setMineLocations(getBoard.mineLocation);
			setGameOver(false);
			setRestart(false);
		};
		generateBoard();
	}, [restart, setRestart]);

	// clear the board to restart the game
	const updateBoard = (x, y, e) => {
		let newBoardValues = JSON.parse(JSON.stringify(board));
		let newNonMinesCount = nonMinesCount;
		if (newBoardValues[x][y].value === 'X') {
			for (let i = 0; i < mineLocations.length; i++) {
				if (
					!newBoardValues[mineLocations[i][0]][mineLocations[i][1]].revealed
				) {
					newBoardValues[mineLocations[i][0]][
						mineLocations[i][1]
					].revealed = true;
					setBoard(newBoardValues);
				}
			}
			setGameOver(true);
		} else {
			newBoardValues = revealed(newBoardValues, x, y, newNonMinesCount);
			if (!newBoardValues) {
				return;
			}
			setBoard(newBoardValues.arr);
			setNonMinesCount(newBoardValues.newNonMinesCount);
		}
	};

	// create the flag option
	const flagCell = (x, y) => {
		let newBoardValues = JSON.parse(JSON.stringify(board));
		newBoardValues[x][y].flagged = !newBoardValues[x][y].flagged;
		setBoard(newBoardValues);
	};

	return (
		<div className='relative'>
			{gameOver && <Modal reset={setRestart} completeTime={newTime} />}
			<TopBar gameOver={gameOver} setTime={setTime} newTime={newTime} />
			{board.map((row, inde) => {
				return (
					<div style={{ display: 'flex' }} key={inde}>
						{row.map((singleCell, index) => {
							return (
								<Cell
									key={index}
									data={singleCell}
									updateBoard={updateBoard}
									flagCell={flagCell}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
