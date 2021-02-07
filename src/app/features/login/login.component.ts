import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { SocketService } from 'src/app/core/service/socket.service';
import { MyErrorStateMatcher } from 'src/app/core/shared/my-error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  usuarioFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  
  constructor(private router: Router,
              private socketS: SocketService) { }

  ngOnInit(): void {
    this.socketS.setupSocketConnection();
  }

  public submitLogin(): void {
    var usuario: Usuario = new Usuario();
    usuario.user = this.usuarioFormControl.value;
    usuario.email = this.emailFormControl.value; 
    this.socketS.userAcces(usuario);
    this.router.navigate(['/home',usuario.user]);
  }

}
