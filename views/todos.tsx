import * as React from 'react';

export default class Todos extends React.Component<any, any> {

	private _priorityInputOptions: any;

	constructor(props) {
		super(props);

		this.state = {
			inputText: '',
			inputPriority: 'NORMAL',
		}

		this._priorityInputOptions= this.props.priorityOptions.map((item) => {
			return <div className='priority-item' key={`priority-${item.value}`}>
					<input 
						type='radio' 
						id={`priority-${item.value}`}
						name='priority' 
						value={item.value} 
						defaultChecked={item.isDefault}
						onChange={(e) => { this.setState({ inputPriority: (e.target as HTMLInputElement).value }) } } />
					<label htmlFor={`priority-${item.value}`}>{item.name}</label>
				</div>;
		});
	}

	validateNewTodo(): boolean {
		return this.state.inputText != '';
	}

	addNewTodo(): void {
		if (this.validateNewTodo()) {
			this.props.newTodoHandler(this.state.inputText, this.state.inputPriority);
			this.setState({ inputText: '' });
		}
	}

	toggleTodo(id: number):void {
		this.props.toggleTodoHandler(id);
	}

	render() {
		return (
			<div>
				<input
					type='text'
					value={this.state.inputText}
					onChange={(e) => {
						let el = e.currentTarget as HTMLInputElement;
						this.setState({ inputText: el.value });
					}}
					onKeyDown={(e) => {
						let keyCode = e.keyCode || e.which;
						if (keyCode == 13) {
							this.addNewTodo();
						}
					}}
				/>
				<button onClick={() => {this.addNewTodo()}}>
					Добавить тудушку
				</button>
				<div>
					{this._priorityInputOptions}
				</div>
				<ul>
					{this.props.todos.map(todo =>
						<li key={todo.getId()}
							onClick={() => {
								this.toggleTodo(todo.getId());
							}}
							style={{
								textDecoration:
									todo.isCompleted() ? 'line-through' : 'none',
								color:
									todo.isMajor() ? 'red' : (todo.isMinor() ? 'blue' : 'black')
							}}
						>
							{todo.getText()}
						</li>
					)}
				</ul>
			</div>
		);
	}
}
