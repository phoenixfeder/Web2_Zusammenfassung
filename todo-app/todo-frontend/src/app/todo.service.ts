import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    public httpClient: HttpClient
  ) { }

  create(todo: Todo): Observable<void> {
    console.log('Create');
    return this.httpClient.post<void>('http://localhost:3000/todos', todo);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/todos/${id}`);
  }

  update(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>('http://localhost:3000/todos', todo);
  }

  getAll(): Observable<Todo[]> {
    console.log('Get all');
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }
}
