import { Directive, HostListener } from '@angular/core';
import { Todo } from './todo';

@Directive({
  selector: '[appDoneListener]'
})
export class DoneListenerDirective {

  @HostListener('done', ['$event'])
  onDone(todo: Todo) {
    console.log(`${todo.title} changed!`);
  }
  constructor() { }

}
