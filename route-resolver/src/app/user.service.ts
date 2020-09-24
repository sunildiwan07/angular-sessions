import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://jsonplaceholder.typicode.com/users').pipe(delay(10000))
  }

}
