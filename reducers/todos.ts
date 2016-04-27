import { Todo } from "../models/todo.ts";

const todos = (state:Todo[] = [], action:any): Todo[] => {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, new Todo(action.id, action.text)];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id == action.id) {
					todo.toggle();
				}
				return todo;
			});
		default:
			return state;
	}
};

export default todos;

