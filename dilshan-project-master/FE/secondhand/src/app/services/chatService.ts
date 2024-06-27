import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:8000');

  sendMessage(message: string): void {
    this.socket.emit('sendMessage', message);
  }

  receiveMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('receiveMessage', (message: string) => {
        observer.next(message);
      });
    });
  }
}
