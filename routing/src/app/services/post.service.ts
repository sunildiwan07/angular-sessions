import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://jsonplaceholder.typicode.com/users')
  }

  getUser(id:number){
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + id)
  }
}
