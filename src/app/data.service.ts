import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  addUser(user){
    return this.http.post('https://jsonplaceholder.typicode.com/users' , user);
  }
  readUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  updateUser(user){
    return this.http.put('https://jsonplaceholder.typicode.com/users/' + user.id, user);
  }
  updateCreate(create){
    return this.http.put('this.create/' + create.name, create); 
  }
  deleteUser(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
