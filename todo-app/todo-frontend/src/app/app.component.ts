import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Neues Todo';
  todos$: Observable<Todo[]>;

  constructor(
    public todoService: TodoService,
  ) {
    this.todos$ = this.todoService.getAll();
  }

  onSubmit() {
    this.todos$ = this.todoService.create(new Todo(this.title)).pipe(
      switchMap(() => this.todoService.getAll())
    );
  }

  onDone(todo: Todo) {
    this.todos$ = this.todoService
      .update(todo)
      .pipe(switchMap(() => this.todoService.getAll()));
  }

  onDelete(id: number) {
    console.log(id);
    this.todos$ = this.todoService
      .delete(id)
      .pipe(switchMap(() => this.todoService.getAll()));
  }
}
