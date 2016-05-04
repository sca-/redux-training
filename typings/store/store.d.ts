/// <reference path='../redux/redux.d.ts' />

interface ITodo {
	getText: () => string;
	isCompleted: () => boolean;
	toggle: () => void;
	getId: () => number;
	isMajor: () => boolean;
}

interface IFilters {
	done: string;
	priority: string;
}

interface IState {
	todos: ITodo[];
	filters: IFilters;
}

interface IStore extends Redux.Store {
	getState: () => IState;
}
