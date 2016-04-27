import * as React from 'react';
import { render } from 'react-dom';
import store from './store.ts';
import Todos from "./views/todos.tsx"
import Filters from "./views/filters.tsx"

const appRender = (): void => {
	render(
		<Todos 
			todos={store.getState()}
			newTodoHandler={(text)=> { store.dispatch({ type: 'ADD_TODO', text: text, id: countr++}) }}
			toggleTodoHandler={(id)=> { store.dispatch({ type: 'TOGGLE_TODO', id: id}) }}
		/>,
		document.getElementById('root')
	);
	render(
		<Filters
			filterChangeHandler={(filter)=> { store.dispatch({ type: 'SET_FILTER', filter: filter}) }}
		/>,
		document.getElementById('root')
	);
};

var countr: number = 0;

store.subscribe(appRender);
appRender();

