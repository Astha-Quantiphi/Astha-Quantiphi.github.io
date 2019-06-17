import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  todoList = [];
  constructor() { }

  getTodoTask() {
    return this.todoList;
  }

  addTask(task) {
    this.todoList.push(task);
    console.log(this.todoList);
    
  }
  


}
