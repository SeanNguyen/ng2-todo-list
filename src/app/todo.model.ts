/**
 * Created by seann on 28/6/2016.
 */

export class Todo {
    public title: string;
    // public get Title(): string { return this.title }
    // public set Title(title: string) { this.title = title }

    public completed: boolean;
    // public get Completed() { return this.completed }
    // public set Completed(completed: boolean) { this.completed = completed }

    constructor(title?: string, completed?: boolean) {
        this.title = title || '';
        this.completed = completed || false;
    }
}