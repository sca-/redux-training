let countr: number = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (dispatch, text, priority): void => {
	dispatch({ type: ADD_TODO, text, priority, id: countr++ });
}

export const toggleTodo = (dispatch, id): void => {
	dispatch({ type: 'TOGGLE_TODO', id: id });
}