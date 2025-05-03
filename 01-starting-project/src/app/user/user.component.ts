import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

// type User = {
//   id:string;
//   avatar:string;
//   name:string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // @Input() id?:string; RETURNS STRING OR UNDEFINED IF STRING NOT ASSIGNED 
  // @Input({required:true}) id!:string; 
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;

  @Input({required:true}) user!: User;
  
  @Output() select = new EventEmitter();

  get imagePath(){
      return 'assets/users/' + this.user.avatar;
    } 

  onClickUser(){
    this.select.emit(this.user.id);
  }

}
