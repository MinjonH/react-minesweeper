import React from 'react';
import './index.css';
import Board from './components/Board';

function App() {
	return (
		<div className='App'>
			<h1 className='font-bold text-7xl pt-4 pb-3'>Minesweeper</h1>
			<br />
			<Board />
			<br />
			<div class='container'>
				<hr />
				{/* Modal button */}
				<br />
				<button
					type='button'
					class='btn btn-warning'
					data-toggle='modal'
					data-target='#rulesModal'
				>
					Minesweeper Rules
				</button>
				{/* Modal*/}
				<div
					class='modal fade'
					id='rulesModal'
					tabindex='-1'
					role='dialog'
					aria-labelledby='rulesModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog' role='document'>
						<div class='modal-content'>
							<div class='modal-header'>
								<h4
									class='modal-title text-2xl font-semibold'
									id='rulesModalLabel'
								>
									The Rules Of Minesweeper
								</h4>
								<button
									type='button'
									class='close'
									data-dismiss='modal'
									aria-label='Close'
								>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div class='modal-body text-left'>
								<ol>
									<li>Mines are randomly placed in the matrix</li>
									<li>
										Numbered cells have mines around them, equal to the number
									</li>
									<li>No mines around empty cells</li>
									<li>User can right click a cell to flag as a mine.</li>
									<li>User can left click a cell to open the cell</li>
									<li>The game is over if a cell with mine is opened</li>
								</ol>
							</div>
							<div class='modal-footer'>
								<button
									type='button'
									class='btn btn-secondary text-black'
									data-dismiss='modal'
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
