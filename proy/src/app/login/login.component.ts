import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      username;
      password;
      prueba=null;
      nums = of(1,2,3);

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
        console.log("usuario no existe")
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
