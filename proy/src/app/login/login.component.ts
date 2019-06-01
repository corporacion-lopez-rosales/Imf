import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { forEach } from '@angular/router/src/utils/collection';
import { isArray } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username;
   password;
  informacion = null;

  credenciales ={
    username: null,
    password: null
  }

  constructor(private AuthService: AuthService) { }


imflogin() {
  this.AuthService.imflogin().subscribe(resultado => {
   console.log(resultado[0]['username']);
   console.log(resultado[0]['password']);
   this.informacion=Array(resultado);
   console.log(this.informacion[0].length);
   var longitud_user=this.informacion[0].length;
  /*this.informacion.forEach(element => {
     console.log(element.username['username']);
   });*/
  for(var i=0; i<longitud_user; i++){
    if (resultado[i]['username']==this.username && resultado[i]['password']==this.password) {
      console.log('Hola mundo')
    }
  }
  });
}
  
  ngOnInit() {
       
  }

  ingresar(event){
    event.preventDefault();

    const target = event.target;
     this.username = target.querySelector('#username').value;
    this.password = target.querySelector('#password').value;

    console.log(this.username, this.password);
    
    console.log("Si entro al login");
    console.log(event);
    this.imflogin(); 
  }

}
