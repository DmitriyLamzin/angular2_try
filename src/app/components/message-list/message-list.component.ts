import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../../service/message.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Message} from "../message/message.model";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];
  loading: boolean;
  @Input() userId: string;
  @Input() messageId: number;
  @Output() onMessageSelected: EventEmitter<number>;
  @Output() onPageChanged: EventEmitter<number>;
  @Input() pageNumber: number;
  @Input() pageSize: number;


  constructor(private messageService: MessageService) {
    this.onPageChanged = new EventEmitter();
    this.onMessageSelected = new EventEmitter();
  }

  ngOnInit(): void {



    // this.messageService.getAllMessages()
    this.getMessages();
  }

  isSelected(message: Message): boolean {
    return message.id === this.messageId;
  }

  setSelected(id: number) {
    this.messageId = id;
    this.onMessageSelected.emit(id);
  }

  nextPage(){
    this.pageNumber += 1;
    this.onPageChanged.emit(this.pageNumber);

    this.getMessages()
  }

  prevPage(){
    this.pageNumber -= 1;
    this.onPageChanged.emit(this.pageNumber);

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
