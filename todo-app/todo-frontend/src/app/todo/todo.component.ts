
import { Todo } from './../todo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input()
  todo: Todo;

  @Output()
  public done = new EventEmitter<any>();

  @Output()
  public deleted = new EventEmitter<any>();

  constructor() { }

  toggleDone() {
    this.todo.done = !this.todo.done;
    this.done.emit(this.todo);
  }

  delete() {
    console.log('Gone');
    this.deleted.emit(this.todo.id);
  }

}
