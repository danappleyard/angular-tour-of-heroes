import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  GetNumberOfMessages(): number {
    return this.messageService.messages.length;
  }
  ClearMessages(): void {
    this.messageService.clear();
  }
  GetMessages(): string[] {
    return this.messageService.messages;
  }

}
