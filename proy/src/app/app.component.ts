import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proy';
  constructor(public AuthService:AuthService,public router:Router){}
  x;
  
  ngOnInit(){
    this.x=this.AuthService.showID();
    console.log(this.x);
    if(this.x==undefined){
      this.router.navigate(['login'])
    }
  }

}