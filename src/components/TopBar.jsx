import React from 'react';
import Timer from './Timer';

export default function TopBar({ gameOver, setTime }) {
	return (
		<div className='bg-[#c0c0c0] flex items-center justify-between pl-10 pr-10 pt-2 pb-2'>
			<span role='img' aria-label='flag' className='pb-[10px] text-2xl'>
				🚩
			</span>
			<Timer gameOver={gameOver} sendTime={setTime} />
		</div>
	);
}
