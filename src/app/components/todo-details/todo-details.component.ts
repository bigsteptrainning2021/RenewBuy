import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  todoList:any=[];
  inProgessList:any=[];
  completedList:any=[];
  showNavigateTab: boolean=false;
  draggableData: any;
  constructor(public todoService:TodoService,private router: Router) { 
    this.todoList=this.todoService.todoList;
    this.inProgessList=this.todoService.inProgressList;
    this.completedList=this.todoService.completedList;
  }

  ngOnInit(): void {
  }

  //add todo in list
  addTodo() {
    this.router.navigate(['/addTodo']);
  }


  //open modal for shift card in tabs
  moveCardByForm() {
    if (this.todoList.length !== 0) 
      this.showNavigateTab = true;
    else{
    alert('Nothing Available in List');
    return;}
  }

  onSubmitMoveCard(data:any){
    if(data.value){
      let count=0;
      let todoDetail;
      for (let item of this.todoList) {
        count += 1;
        if (item.title === data.value.selectTitle) {
          todoDetail = item;
          break;
        }
      }
      this.todoList.splice(count - 1, 1);
      if(data.value.navigateToTab==='inProgress')
        this.todoService.inProgressList.unshift(todoDetail)
      else if(data.value.navigateToTab==='completed')
        this.todoService.completedList.unshift(todoDetail)
      else 
        this.todoService.todoList.unshift(todoDetail);

     this.showNavigateTab = !this.showNavigateTab;
    }
  }

  drag(item:any){
    this.draggableData=item;
  }
  drop(area:any){
    if(area==="inProgress"){
      this.todoService.inProgressList.push(this.draggableData)
    }
  }
}
