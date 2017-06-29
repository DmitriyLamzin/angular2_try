import { Component, OnInit } from '@angular/core';
import {User} from "../../components/user/user.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  loading: boolean;
  user: User;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.loading = true;
    this.userService.getUserById(this.id).subscribe((res: User) => {
      this.user = res;
      this.loading = false;
    });

  }

}
