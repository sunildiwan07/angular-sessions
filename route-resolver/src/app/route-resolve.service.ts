import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteResolveService {

  constructor(private userService : UserService) { }

  resolve(){
    return this.userService.getUsers();
  }
}
