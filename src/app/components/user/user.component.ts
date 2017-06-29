import {Component, Input, OnInit} from '@angular/core';
import {User} from "./user.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() id: number;
  user: User = new User();
  loading: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUserById(this.id).subscribe((result: User) => {
      this.user = result;
      this.loading = false;
    })
  }

}
