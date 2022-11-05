import React, { useState, useEffect } from 'react';

export default function Modal({ reset, completeTime }) {
	const [render, setRender] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setRender(true);
		}, 1000);
	}, []);
	return (
		<div
			className='absolute h-full w-full bg-[rgba(0,0,0,0.75)]'
			style={{
				opacity: render ? 1 : 0,
			}}
		>
			<div id='gameOver'>
				<h1 className='text-red-600 text-[60px] font-bold'>Game Over</h1>
			</div>
			<div onClick={() => reset()} className='tryAgain w-[90%] ml-[5%]'>
				Try Again
			</div>
		</div>
	);
}
