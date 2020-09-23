import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(private userService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params.id).subscribe(res => this.user = res)
  }

}
