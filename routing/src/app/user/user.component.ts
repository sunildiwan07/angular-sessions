import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private userService: PostService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(resp=>this.users=resp);
  }

}
