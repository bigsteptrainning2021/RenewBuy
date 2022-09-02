import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList:any=[
    {
      title:"firstt Todo",
      description:"Complete todo app",
      priority:"critical",
      image:"https://i.imgur.com/oYiTqum.jpg"
    },
    {
      title:"Show Todo",
      description:"Show todo app",
      priority:"high",
      image:"https://i.imgur.com/oYiTqum.jpg"
    }
  ];
  inProgressList:any=[];
  completedList:any=[];

  constructor() { }

}
