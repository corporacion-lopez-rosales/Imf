import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Registro} from '../Modelo/Registros';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public credenciales ={
    username: '',
    password: ''
  }
  public usuario:Registro;
  constructor(private AuthService: AuthService) { 
    this.usuario= new Registro (0,7,'',0,0,0,'','','','','','',0,0,0,'');
    
   }
  
  ngOnInit() {
  }

  onSubmit(from : NgForm){
    this.AuthService.registrar(this.usuario).subscribe(result=>{
      console.log(result);
      console.log('NuevoUsuario')
    },
    error=>{
      console.log(<any>error)
    }
    )

  }

}
