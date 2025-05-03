import { Component,Input,Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) userId?:string;
  @Input({required:true}) name?:string;

  tasks = dummyTasks;  
  
  get selectedUsersTasks(){
     return this.tasks.filter((task)=> task.userId===this.userId);
  }
  // @Input({required:true}) title!:string; 
  // @Input({required:true}) summary!:string; 
  // @Input({required:true}) dueDate!:string;

}
