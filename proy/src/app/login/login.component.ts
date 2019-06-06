import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      username;
      password;
      prueba=null;

  constructor(private AuthService: AuthService,private router: Router) { }


  login(){
    this.AuthService.login().subscribe(result=>{
      this.prueba=Array(result);
      console.log(this.prueba[0].length);
      var longitud_user=this.prueba[0].length;
      for(var i=0; i<longitud_user; i++){
        if (result[i]['username']==this.username && result[i]['password2']==this.password) {
          this.router.navigate(['']);
        }
      }
    },
    error=>{
     console.log(<any>error);
    }
    )
  }
  
  ngOnInit() {
 
  }

  ingresar(event){
    event.preventDefault();

    const target = event.target;
    this.username = target.querySelector('#username').value;
    this.password = target.querySelector('#password').value;
    this.login(); 
  }

}
