/**
 * Created by seann on 28/6/2016.
 */

export class Todo {
    public title: string;
    public completed: boolean;

    constructor(title?: string, completed?: boolean) {
        this.title = title || '';
        this.completed = completed || false;
    }
}