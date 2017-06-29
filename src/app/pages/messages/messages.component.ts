import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Message} from "../../components/message/message.model";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messageId: number;
  pageNumber: number = 0;
  pageSize: number = 5;
  userId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.messageId = +params['messageId'];
      this.pageNumber = +params['pageNumber'];
      this.pageSize = +params['pageSize'];
    });

    if (isNaN(this.pageNumber)) {
      this.pageNumber = 1;
    }
    if (isNaN(this.pageSize)) {
      this.pageSize = 5;
    }
  }

  setSelected(id: number) {
    this.messageId = id;
    this.router.navigate(['messages'], { queryParams:
      { messageId: this.messageId,
        userId: this.userId,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      } });
  }

  navigateToPage(page: number){
    this.pageNumber = page;
    this.router.navigate(['messages'], { queryParams:
      { messageId: this.messageId,
        userId: this.userId,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      } });
  }
}
