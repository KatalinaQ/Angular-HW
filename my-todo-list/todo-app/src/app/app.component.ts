import { Component } from '@angular/core';
import {Todo} from './interfaces/Todo';
import { Filters } from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

todoList: Array<Todo>;
originTodoList: Array<Todo> = [
  {
    id: 1,
    title: 'JavaScript',
    isCompleted: false,
    isDeleted: false,
    body: 'Some text'
  },
  {
    id: 2,
    title: 'Learn Angular',
    isCompleted: false,
    isDeleted: false
  },
  {
    id: 3,
    title: 'Learn C#',
    isCompleted: false,
    isDeleted: false
  },
  {
    id: 4,
    title: 'Learn React',
    isCompleted: false,
    isDeleted: false
  }
];
constructor(){
  this.todoList = this.originTodoList;
}

hasValidItems(): boolean {
  return this.todoList.length > 0;
}

deleteTodoItem(id: number): void {
  let itemIndex = this.originTodoList
  .findIndex(item => item.id === id);

  const newItem = {
    ...this.originTodoList[itemIndex],
    isDeleted: !this.originTodoList[itemIndex].isDeleted
  };
  this.originTodoList[itemIndex] = newItem;

  this.todoList = this.originTodoList
  .filter(item => item.isDeleted === false);
}

completeTodoItem(id: number): void {
  let itemIndex = this.originTodoList
  .findIndex(item => item.id === id);

  const newItem = {
    ...this.originTodoList[itemIndex],
    isCompleted: !this.originTodoList[itemIndex].isCompleted
  };
  
  this.originTodoList[itemIndex] = newItem;

  this.todoList = this.originTodoList;
}

filterTodoItems(filter: string): void {

  switch(filter){
    case Filters.completed:
      this.todoList = this.originTodoList.filter(item => item.isCompleted);
        break;
    case Filters.uncompleted:
      this.todoList = this.originTodoList.filter(item => !item.isCompleted);
        break;
    default:
      this.todoList = this.originTodoList;
      break;
  }
}

}
