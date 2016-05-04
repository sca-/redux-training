require("!style!css!less!./s.less");

import { Todo } from "./models/todo.ts";
import * as React from 'react';
import { render } from 'react-dom';
import store from './store.ts';
import Todos from "./views/todos.tsx"
import Filters from "./views/filters.tsx"

const visibleTodos = (): Todo[] => {
	let state: any = store.getState(),
		todos: Todo[] = [...state.todos];
	switch(state.filters.done) {
		case 'COMPLETE':
			todos = todos.filter(item => item.isCompleted());
			break;
		case 'INCOMPLETE':
			todos = todos.filter(item => !item.isCompleted());
			break;
	}
	switch(state.filters.priority) {
		case 'NORMAL':
			todos = todos.filter(item => !item.isMajor() && !item.isMinor());
			break;
		case 'MAJOR':
			todos = todos.filter(item => item.isMajor());
			break;
		case 'MINOR':
			todos = todos.filter(item => item.isMinor());
			break;
	}

	return todos;
}

const appRender = (): void => {
	render(
		<Todos
			todos={visibleTodos()}
			priorityOptions={Todo.priorityOptions}
			newTodoHandler={(text, priority)=> { store.dispatch({ type: 'ADD_TODO', text, priority, id: countr++}) }}
			toggleTodoHandler={(id)=> { store.dispatch({ type: 'TOGGLE_TODO', id: id}) }}
		/>,
		document.getElementById('todos')
	);
	render(
		<Filters
			filterChangeHandler={(filter, value)=> { store.dispatch({ type: 'SET_FILTER', filter: filter, value: value}) }}
			filterClearHandler={()=> { store.dispatch({ type: 'RESET_FILTERS' }) }}
		/>,
		document.getElementById('filters')
	);
};

var countr: number = 0;

store.subscribe(appRender);
appRender();
