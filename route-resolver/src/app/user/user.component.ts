import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userData:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.userData = this.route.snapshot.data['userData'];
  }

}
