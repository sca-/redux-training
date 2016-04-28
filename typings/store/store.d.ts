/// <reference path='../redux/redux.d.ts' />

interface ITodo {
	getText: () => string;
	isCompleted: () => boolean;
	toggle: () => void;
	getId: () => number;
	isMajor: () => boolean;
}

interface IState {
	todos: ITodo[];
	filter: string;
}

interface IStore extends Redux.Store {
	getState: () => IState;
}
