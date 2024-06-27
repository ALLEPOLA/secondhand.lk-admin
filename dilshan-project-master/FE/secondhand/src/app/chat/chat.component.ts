import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chatService';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages: { text: string, sentByUser: boolean }[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.receiveMessage().subscribe((message: string) => {
      this.messages.push({ text: message, sentByUser: false });
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.messages.push({ text: this.message, sentByUser: true });
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

  isSentByUser(message: { text: string, sentByUser: boolean }): boolean {
    return message.sentByUser;
  }
}
