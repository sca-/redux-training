import * as React from 'react';

const FilterLink = (props) => {
	return (
		<a href='#' onClick={e => {
			e.preventDefault();
			props.filterChangeHandler(props.filter, props.value);
		}}>
		{props.children}
		</a>);
};

export default class Filters extends React.Component<any, any> {
	render() {
		return (
			<div>
				Отфильтровать: 
				<FilterLink filter='done' value='COMPLETE' filterChangeHandler={this.props.filterChangeHandler}>
					Завершенные
				</FilterLink>
				<FilterLink filter='done' value='INCOMPLETE' filterChangeHandler={this.props.filterChangeHandler}>
					Незавершенные
				</FilterLink>
			
				<FilterLink filter='priority' value='NORMAL' filterChangeHandler={this.props.filterChangeHandler}>
					Нормальный приоритет
				</FilterLink>
				<FilterLink filter='priority' value='MAJOR' filterChangeHandler={this.props.filterChangeHandler}>
					Высокий приоритет
				</FilterLink>
				<FilterLink filter='priority' value='MINOR' filterChangeHandler={this.props.filterChangeHandler}>
					Низкий приоритет
				</FilterLink>

				<a href='#' onClick={e => {
					e.preventDefault();
					this.props.filterClearHandler();
				}}>
					Сбросить фильтры
				</a>
			</div>
		);
	}
}
