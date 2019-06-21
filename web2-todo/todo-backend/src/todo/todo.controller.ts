import { Controller, Get, Param, Body, Post, HttpStatus, HttpCode, Delete, Put, Logger } from '@nestjs/common';
import { Todo } from '../todo';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {

  private todoLogger = new Logger('Todo');
  
  constructor(
    public todoService: TodoService
  ) {}

  @Get('/:id')
  get(@Param('id') id: string): Todo {
    this.todoLogger.log(`Getting Todo ${id}`);
    return this.todoService.get(+id);
  }

  @Get()
  getAll(): Todo[] {
    this.todoLogger.log('Getting all Todos');
    return this.todoService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() todo: Todo): Todo {
    this.todoLogger.log(`Creating new Todo '${todo.title}'`);
    return this.todoService.create(todo);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): void {
    this.todoLogger.log(`Deleting Todo ${id}`);
    this.todoService.delete(+id);
  }

  @Put()
  update(@Body() todo: Todo): Todo {
    this.todoLogger.log(`Updating Todo ${todo.title}`);
    return this.todoService.update(todo);
  }
  
}
