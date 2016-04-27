import { createStore, combineReducers } from 'redux';
import todos from './reducers/todos.ts';
import filters from './reducers/filters.ts';

const todoApp = combineReducers({
	todos,
	filters
});
const store = createStore(todoApp);

export default store;
