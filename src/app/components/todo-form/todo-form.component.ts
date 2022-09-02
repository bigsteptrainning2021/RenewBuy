import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  img: string | ArrayBuffer | null | undefined;

  constructor(public router:Router,public todoService:TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm) {
    let value={
      title:data.value.title,
      description:data.value.description,
      priority:data.value.priority,
      image:this.img
    }
    setTimeout(() => {
      this.todoService.todoList.unshift(value);
      data.form.reset();
      this.router.navigate(['/']);
    }, 500);

  }

  async onChange(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.addEventListener('load', (event) => {
        setTimeout(() => {
            this.img=event?.target?.result;
        }, 500);
      });
      reader.readAsDataURL(file);
    }
  }
}
