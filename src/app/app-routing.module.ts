import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

const routes: Routes = [
  {
    path: '',
    component: TodoDetailsComponent,
  },
  {
    path: 'addTodo',
    component: TodoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
