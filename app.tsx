require("!style!css!less!./s.less");

// actions
import * as TodoActions from './actions/todos';
import * as FilterActions from './actions/filters';

// models
import { Todo } from './models/todo';

// react
import * as React from 'react';
import { render } from 'react-dom';

// store
import store from './store.ts';

// views
import Todos from './views/todos';
import Filters from './views/filters';

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
	if (state.filters.priority != 'ALL') {
		todos = todos.filter(item => item.getPriority() == state.filters.priority);
	}

	return todos;
}

const appRender = (): void => {
	render(
		<Todos
			todos={visibleTodos()}
			priorityOptions={Todo.priorityOptions}
			newTodoHandler={(text, priority)=> { TodoActions.addTodo(store.dispatch, text, priority) }}
			toggleTodoHandler={(id)=> { TodoActions.toggleTodo(store.dispatch, id) }}
		/>,
		document.getElementById('todos')
	);
	render(
		<Filters
			filterChangeHandler={(filter, value)=> { FilterActions.setFilter(store.dispatch, filter, value) }}
			filterClearHandler={()=> { FilterActions.resetFilters(store.dispatch) }}
			activeFilters={store.getState().filters}
		/>,
		document.getElementById('filters')
	);
};

store.subscribe(appRender);
appRender();
