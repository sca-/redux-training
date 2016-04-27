import * as React from 'react';

const FilterLink = (props) => {
	return (
		<a href='#' onClick={e => {
			e.preventDefault();
			this.props.filterChangeHandler(props.filter);
		}}>
		{props.children}
		</a>);
};

export default class Filters extends React.Component<any, any> {
	render() {
		return (
			<div>
				Отфильтровать: 
				<FilterLink filter='COMPLETE'>
					Завершенные
				</FilterLink>
				<FilterLink filter='INCOMPLETE'>
					Незавершенные
				</FilterLink>
			</div>
		);
	}
}

