import * as React from 'react';

export default class Todos extends React.Component<any, any> {
	inputText: any;
	inputPriority: any;

	validateNewTodo(): boolean {
		return this.inputText.value != '';
	}

	addNewTodo(): void {
		if (this.validateNewTodo()) {
			this.props.newTodoHandler(this.inputText.value, this.inputPriority.checked ? this.inputPriority.value : '');
			this.inputText.value = '';
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
						this.inputText = node;
					}}
					onKeyDown={(e) => {
						if (e.keyCode == 13) {
							this.addNewTodo();
						}
					}}
				/>
				<input type='radio' name='priority' value='normal'/>
				Нормальный приоритет
				<input type='radio' ref={node => { this.inputPriority = node; }} name='priority' value='major'/>
				Высокий приоритет
				<button onClick={() => {this.addNewTodo()}}>
					Добавить тудушку
				</button>
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
									todo.isMajor() ? 'red' : 'black'
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
