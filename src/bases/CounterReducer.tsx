import { useReducer, useState } from 'react';

interface CounterState {
	counter: number;
	previous: number;
	changes: number;
}

const INITIAL_STATE: CounterState = {
	changes: 0,
	counter: 0,
	previous: 0,
};

type CounterAction =
	| { type: 'increaseBy'; payload: { value: number } }
	| { type: 'reset' };

//Un reducer es una funcion pura (solo trabaja con lo que recibe el cuál recibe un estado y una acción y devuelve un nuevo estado.
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
	switch (action.type) {
		case 'increaseBy':
			return {
				changes: state.changes + 1,
				counter: state.counter + action.payload.value,
				previous: state.counter,
			};
		case 'reset':
			return {
				changes: 0,
				counter: 0,
				previous: 0,
			};
		default:
			return state;
	}
};

export const CounterReducerComponent = () => {
	const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const increaseBy = (value: number) => {
		dispatch({ type: 'increaseBy', payload: { value } });
	};

	const onReset = () => {
		dispatch({ type: 'reset' });
	};

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={() => increaseBy(1)}>+1</button>
			<button onClick={() => increaseBy(5)}>+5</button>
			<button onClick={() => increaseBy(10)}>+10</button>
			<button onClick={onReset}>reset</button>
		</>
	);
};
