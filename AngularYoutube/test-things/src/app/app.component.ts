import { Component } from '@angular/core';
import { ToDoList } from './toDoList.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-things';
  count:number =0;
  flag : boolean = true;
  color : string = 'red';
 // todolist :any[] = []
  todolist :ToDoList[]=[];
  idCounter : number = 0;

  print(/*data:KeyboardEvent*/ data:Event){
    console.log((<HTMLInputElement>data.target).value);   
  }

  counter(operation:string){
    operation == '++'?this.count++:this.count--;
  }

  changeColor(){
    this.color = 'green';
    return this.color;
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'RS';
    }

    return `${value}`;
  }

  addTask(data : string){
    console.log(data)
    this.todolist.push(new ToDoList(this.idCounter,data))
    this.idCounter++ ;
  }
  removeTask(did : number){

    //this.todolist.splice(id,1);
    this.todolist = this.todolist.filter(objs => objs.id!==did )
    //console.log(id)
  }


}
