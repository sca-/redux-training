export class Todo implements ITodo {

	static priorityOptions:any = [
		{
			value: 'NORMAL',
			name: 'Нормальный',
			isDefault: true
		},
		{
			value: 'MAJOR',
			name: 'Высокий'
		},
		{
			value: 'MINOR',
			name: 'Низкий'
		}
	];

	private _text: string;
	private _id: number;
	private _completed: boolean;
	private _priority: string;

	constructor(index: number, name: string, priority: string = 'normal') {
		this._id = index;
		this._text = name;
		this._completed = false;
		this._priority = priority;
	}

	public getText(): string {
		return this._text;
	}

	public isCompleted(): boolean {
		return this._completed;
	}

	public toggle():void {
		this._completed = !this._completed;
	}

	public getId():number {
		return this._id;
	}

	public getPriority():string {
		return this._priority;
	}

	public isMajor():boolean {
		return this._priority == 'MAJOR';
	}

	public isMinor():boolean {
		return this._priority == 'MINOR';
	}
}
