import { Component, OnInit } from '@angular/core';
import { loginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  user={
    nombre :"",
    pass : ""
  }

  constructor(private Acceso: loginService) { }

  ngOnInit(): void {
  }
  validar(){
    if(this.user.nombre !=""){

        console.log(this.Acceso.login(this.user));
      }
    }
  }