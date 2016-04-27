import * as React from 'react';

export default class Todos extends React.Component<any, any> {
	input: any;

	validateNewTodo(): boolean {
		return this.input.value != '';
	}

	addNewTodo(): void {
		if (this.validateNewTodo()) {
			this.props.newTodoHandler(this.input.value);
			this.input.value = '';
		}
	}

	toggleTodo(id: number):void {
		this.props.toggleTodoHandler(id);
	}

	render() {
		return (
			<div>
				<input 
					ref={node => {
						this.input = node;
					}}
					onKeyDown={(e) => {
						if (e.keyCode == 13) {
							this.addNewTodo();
						}
					}}
				/>
				<button onClick={() => {this.addNewTodo()}}>
					Добавить тудушку
				</button>
				<ul>
					{this.props.todos.map(todo =>
						<li key={todo.id}
							onClick={() => {
								this.toggleTodo(todo.id);
							}}
							style={{
								textDecoration:
									todo.isCompleted() ? 'line-through' : 'none'
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
