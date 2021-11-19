import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

//Un reducer es una funcion pura (solo trabaja con lo que recibe el cuál recibe un estado y una acción y devuelve un nuevo estado.
export const counterReducer = (
	state: CounterState,
	action: CounterAction
): CounterState => {
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
