const filters = (state:string = '', action:any): any => {
	switch(action.type) {
		case 'SET_FILTER':
			return action.filter;
		case 'RESET_FILTER':
			return '';
		default:
			return state;
	}
};

export default filters;

