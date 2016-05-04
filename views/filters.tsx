import * as React from 'react';

const FilterLink = (props) => {
	if (props.activeValue === props.value) {
		return <span>{props.children}</span>;
	}

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
				<div className='filter-group'>
					<h3>Отфильтровать: </h3>
					<FilterLink filter='done' value='ALL' activeValue={this.props.activeFilters.done} filterChangeHandler={this.props.filterChangeHandler}>
						Все статусы
					</FilterLink>
					<FilterLink filter='done' value='COMPLETE' activeValue={this.props.activeFilters.done} filterChangeHandler={this.props.filterChangeHandler}>
						Завершенные
					</FilterLink>
					<FilterLink filter='done' value='INCOMPLETE' activeValue={this.props.activeFilters.done} filterChangeHandler={this.props.filterChangeHandler}>
						Незавершенные
					</FilterLink>
				</div>
			
				<div className='filter-group'>
					<FilterLink filter='priority' value='ALL' activeValue={this.props.activeFilters.priority} filterChangeHandler={this.props.filterChangeHandler}>
						Все приоритеты
					</FilterLink>
					<FilterLink filter='priority' value='NORMAL' activeValue={this.props.activeFilters.priority} filterChangeHandler={this.props.filterChangeHandler}>
						Нормальный приоритет
					</FilterLink>
					<FilterLink filter='priority' value='MAJOR' activeValue={this.props.activeFilters.priority} filterChangeHandler={this.props.filterChangeHandler}>
						Высокий приоритет
					</FilterLink>
					<FilterLink filter='priority' value='MINOR' activeValue={this.props.activeFilters.priority} filterChangeHandler={this.props.filterChangeHandler}>
						Низкий приоритет
					</FilterLink>
				</div>

				<div className='filter-group'>
					<a href='#' onClick={e => {
						e.preventDefault();
						this.props.filterClearHandler();
					}}>
						Сбросить фильтры
					</a>
				</div>
			</div>
		);
	}
}
