import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
// import * as socketIo from 'socket.io-client'
import { io } from "socket.io-client";
import { Manager } from "socket.io-client";



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socketManager = new Manager(environment.ws);
  private clientSocket = this.socketManager.socket('/');
  constructor() {
    this.clientSocket.open()
  }

  public listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.clientSocket.on(event, (data) => {
        subscriber.next(data)
      })
    })
  }

  public push(eventName: string, payload: any) {
    this.clientSocket.emit(eventName, { a: "b", c: [] });
  }
}
