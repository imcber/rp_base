import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {
	const counterElement = useRef<HTMLHeadingElement>(null);

	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
	};

	useEffect(() => {
		if (counter < MAX_COUNT) return;

		const tl = gsap.timeline();

		tl.to(counterElement.current, { y: -30, duration: 0.2, ease: 'ease.out' });
		tl.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
	}, [counter]);

	return (
		<>
			<h1>Counter Effect</h1>
			<h2 ref={counterElement}>{counter}</h2>
			<button onClick={handleClick}>+1</button>
		</>
	);
};
