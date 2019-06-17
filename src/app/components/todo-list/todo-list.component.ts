import { Component, OnInit } from "@angular/core";
import { isGeneratedFile } from "@angular/compiler/src/aot/util";
import { Todo } from "../../interfaces/todo";
import { from } from "rxjs";
import { trigger, transition, style, animate } from "@angular/animations";
import { LearningService } from "../../service/learning.service";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0, transform: 'translateY(30px)'}),
          animate(1000, style({opacity:1, transform: 'translateY(0px)'}))
      ]),
      transition(":leave", [
          animate(1000, style({opacity:0, transform: 'translateY(30px)'}))
      ]),
    ])
  ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  filter: string;

  constructor(private service: LearningService) {}

  ngOnInit() {
    this.filter = "all";
    this.idForTodo = 4;
    this.todoTitle = "";
    this.todos = [];
    // this.todos = [
    //   {
    //     id: 1,
    //     title: "Finish Angular Screencast",
    //     completed: false,
    //     editing: false
    //   },
    //   {
    //      id: 2,
    //     title: "Take over world",
    //     completed: false,
    //     editing: false
    //   },
    //   {
    //     id: 3,
    //     title: "One more thing",
    //     completed: false,
    //     editing: false
    //   }
    // ];
  }


  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.service.addTask({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false,
      checked:false
    });

    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false,
      checked:false
    });

    this.todoTitle = "";
    this.idForTodo++;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(
      todo => (todo.completed = (<HTMLInputElement>event.target).checked)
    );
  }

  todosFiltered(): Todo[] {
    if (this.filter == "all") {
      return this.todos;
    } else if (this.filter == "active") {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter == "completed") {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }

  moveTo(state){
    if(state=== 'completed'){
      this.todos.forEach(val=>{
        if(val.checked){
          val.completed= true;
        }
        val.checked= false;
      })
      
    }
    else if(state=== 'active'){
      this.todos.forEach(val=>{
        if(val.checked){
          val.completed= false;
        }
        val.checked= false;
      })
    }
    this.filter= state;
  }
}
