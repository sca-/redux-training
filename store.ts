const counter = (state:number = 0, action:any): number => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		default:
			return state;
	}
};

const { createStore } = Redux;
const store = createStore(counter);

const render = (): void => {
	document.body.innerHTML = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', ():void => {
	store.dispatch({ type: 'INC' });
});

