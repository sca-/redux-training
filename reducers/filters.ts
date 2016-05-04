const filters = (state:any = {done:'ALL', priority:'ALL'}, action:any): any => {
	switch(action.type) {
		case 'SET_FILTER':
			let newState = {done:state.done, priority:state.priority};
			newState[action.filter] = action.value;
			return newState;
		case 'RESET_FILTERS':
			return {done:'ALL', priority:'ALL'};
		default:
			return state;
	}
};

export default filters;

