import { Todo } from "./models/todo.ts";

const { createStore } = Redux;
const store = createStore(todos);

var countr: number = 0;

const todos = (state:Todo[] = [], action:any): Todo[] => {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, new Todo(action.id, action.text)];
		default:
			return state;
	}
}

const render = (): void => {
	document.body.innerHTML = store.getState().map(item => {
		return item.text;
	}).join(' ');
};

store.subscribe(render);

document.addEventListener('click', ():void => {
	store.dispatch({ type: 'ADD_TODO', text: 'test', id: countr++});
});

