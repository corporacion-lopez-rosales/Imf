import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  credenciales ={
    username: null,
    password: null
  }
  constructor(private AuthService: AuthService) {
    
   }
  
  ngOnInit() {
  }

  imfregistrar(){
    console.log("hola akjsbdosajdb");
    this.AuthService.imfregistrar(this.credenciales).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      } 
    });
  }

}
