import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
 @Input() item: Todo
 @Output() deleteEvent = new EventEmitter();
 @Output() completeEvent = new EventEmitter();

  ngOnInit() {
  }

  deleteItem() {
    this.deleteEvent.emit(this.item.id);  
  }

  completeItem(){
    this.completeEvent.emit(this.item.id);
  }
}
