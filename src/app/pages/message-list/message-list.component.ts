import { Component, OnInit } from '@angular/core';
import {Message} from "../../components/message/message.model";
import {MessageService} from "../../service/message.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];
  loading: boolean;
  userId: string;
  messageId: number;
  pageNumber: number = 0;
  pageSize: number = 5;

  constructor(private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
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


    // this.messageService.getAllMessages()
    this.getMessages();
  }



  isSelected(message: Message): boolean {
    return message.id === this.messageId;
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

  nextPage(){
    this.pageNumber += 1;
    this.router.navigate(['messages'], { queryParams:
      { messageId: this.messageId,
        userId: this.userId,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
    } });

    this.getMessages()
  }

  prevPage(){
    this.pageNumber -= 1;
    this.router.navigate(['messages'], { queryParams:
      { messageId: this.messageId,
        userId: this.userId,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      } });

    this.getMessages();
  }

  private getMessages() {
    this.loading = true;
    this.messageService.getAllMessages(this.userId, this.pageNumber, this.pageSize).subscribe((result: Message[]) => {
      this.messages = result;
      this.loading = false;
    });
  }

}
