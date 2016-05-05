import { createStore, combineReducers, compose } from 'redux';
import todos from './reducers/todos';
import filters from './reducers/filters';

const todoApp = combineReducers({
	todos,
	filters
});
const store = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)
(createStore)(todoApp) as IStore;

export default store;
