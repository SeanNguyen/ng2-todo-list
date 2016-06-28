/**
 * Created by seann on 28/6/2016.
 */

export class Todo {
    private _title: string;
    public get title(): string { return this._title }
    public set title(title: string) { this._title = title.trim() }

    private _completed: boolean;
    public get completed(): boolean { return this._completed }
    public set completed(completed: boolean) { this._completed = completed }

    constructor(title?: string, completed?: boolean) {
        this.title = title || '';
        this.completed = completed || false;
    }
}