export const SET_FILTER = 'SET_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';

export const setFilter = (dispatch, filter, value): void => {
	dispatch({ type: 'SET_FILTER', filter: filter, value: value });
}

export const resetFilters = (dispatch): void => {
	dispatch({ type: 'RESET_FILTERS' });
}