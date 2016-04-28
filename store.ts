import { createStore, combineReducers } from 'redux';
import todos from './reducers/todos';
import filters from './reducers/filters';

const todoApp = combineReducers({
	todos,
	filters
});
const store = createStore(todoApp) as IStore;

export default store;
