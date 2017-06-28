import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../service/message.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  title: AbstractControl;
  body: AbstractControl;
  userId: AbstractControl;


  constructor(private messageService: MessageService, fb: FormBuilder) {
    this.messageForm = fb.group({
      'title': ['', Validators.required],
      'body': ['', Validators.required],
      'userId': ['', Validators.compose([
                    Validators.required, Validators.pattern(/^\d+$/)])]
    });

    this.title = this.messageForm.controls['title'];
    this.body = this.messageForm.controls['body'];
    this.userId = this.messageForm.controls['userId'];
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('you submitted value:', form);
    this.messageService.postMessage(form);
  }
}
