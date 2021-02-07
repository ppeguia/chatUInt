import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, { transports: ['polling', 'websocket'] });
    this.socket.on('connect', function () {
      console.log('connected!');
    });
  }

  userAcces(usuario: Usuario) {
    var userSession: string = '';
    this.socket.emit('data_user', { correo: usuario.email, usuario: usuario.user });
    this.socket.on('user', (user: any) => {
      userSession = user.user;
      alert('el nuevo usuario: ' + user.user);
    });
    return userSession;
  }
}
