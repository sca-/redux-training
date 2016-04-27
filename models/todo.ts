export class Todo {
	text: string;
	id: number;
	completed: boolean;

	constructor(index: number, name: string) {
		this.id = index;
		this.text = name;
	}

	public getText(): string {
		return this.text;
	}

	public isCompleted(): boolean {
		return this.completed;
	}

	public toggle():void {
		this.completed = !this.completed;
	}
}
