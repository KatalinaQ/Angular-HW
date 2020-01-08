import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Filters } from 'src/app/enums';

@Component({
  selector: 'app-todo-list-filters',
  templateUrl: './todo-list-filters.component.html',
  styleUrls: ['./todo-list-filters.component.css']
})

export class TodoListFiltersComponent implements OnInit {

  @Output() filterEvent = new EventEmitter();

  ngOnInit() {
  }

  showAllItems() {
    const filter = Filters.all;
    this.filterEvent.emit(filter);
  }

  showUnCompletedItems() {
    const filter = Filters.uncompleted;
    this.filterEvent.emit(filter);
  }

  showCompletedItems(){
    const filter = Filters.completed;
    this.filterEvent.emit(filter);
  }
}
