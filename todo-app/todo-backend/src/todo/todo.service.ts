import { Injectable } from '@nestjs/common';
import { Todo } from '../todo';

let fakeId = 0;

@Injectable()
export class TodoService {
  private todoStore = new Map<number, Todo>();

  create(todo: Todo): Todo {
    this.todoStore.set(fakeId, new Todo(todo.title, todo.done, fakeId++));
    return todo;
  }

  delete(id: number): void {
    this.todoStore.delete(id);
  }

  update(todo: Todo): Todo {
    this.todoStore.set(+todo.id, new Todo(todo.title, todo.done, todo.id));
    return todo;
  }

  get(id: number): Todo {
    return this.todoStore.get(id);
  }

  getAll(): Todo[] {
    return Array.from(this.todoStore.values());
  }
}
