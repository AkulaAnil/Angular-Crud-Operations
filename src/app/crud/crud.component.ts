import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  public users: any = [];
  public user: any = {
    name: '',
    email: '',
    phone: ''
  };
  public create: any = {
    name: '',
    email: '',
    phone: ''
  };
  public isEdit: boolean = false;

  constructor(private dataService: DataService) { 
    this.getUsers();
  }
  // Get Users
  getUsers(){
    this.dataService.readUsers().subscribe(users => {
      this.users = users;
    })
  }
  
  // Delete Users
  onDeleteClick(id){
    this.dataService.deleteUser(id).subscribe(res => {
      for(var i=0; i< this.users.length; i++){
        if(this.users[i].id===id){
          this.users.splice(i,1);
        }
      }
    })
  }

  onEditClick(user){
    this.isEdit = true;
    this.user = user;
  }
  
  // Update Users
  updateUser(isEdit){
    if(this.user){
      this.dataService.updateUser(this.user).subscribe(user => {
        for(var i=0; i<this.users.length; i++){
          if(this.users[i].id===this.user.id){
            this.users.splice(i,1);
          }
        }
        this.users.unshift(this.user);
        this.user = [];
      }); 
    } else {
      this.dataService.updateCreate(this.create).subscribe(create => {
        for(var i=0; i < this.create.length; i++){
          if(this.create[i].name===this.create.name){
            this.create.splice(i,1);
          }
        }
        this.create.unshift(this.create);
        this.create = [];
      })
    }
    // else {
    //   this.dataService.updateUser(this.create).subscribe( create => {
    //     for(var i=0; i<this.create.length; i++){
    //       if(this.create[i].name===this.create.name){
    //         this.create.splice(i,1);
    //       }
    //     }
    //     this.create.unshift(this.create);
    //     this.create = [];
    //   });
    // }
      
    //  else {
    //   this.dataService.addUser(this.user).subscribe(user => {
    //     this.users.unshift(user);
    //   })
    //  } 
    
  }
  
  // Creaate Users
  createUser(create){
    this.dataService.addUser(this.create).subscribe(create => {
      this.users.unshift(this.create);
      this.create = [];
    })  
  }

}
