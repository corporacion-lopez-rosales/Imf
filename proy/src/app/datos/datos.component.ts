import { Component, OnInit } from '@angular/core';
import {DatosGenerales} from '../Modelo/DatosGenerales';
import { Form } from '@angular/forms';
import {AuthService} from '../auth.service';
//this.x es la variable que contiene el id del usuario que esta logeado 
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  public datos:DatosGenerales
  constructor(public AuthService:AuthService) { this.datos=new DatosGenerales(0,0,'','','','','','','','','',"",0,0,0,this.x,0) }
  x=this.AuthService.showID()
  ngOnInit() {
  }


  onSubmit(ng:Form){
    this.AuthService.almReg2(this.datos).subscribe(result=>{
      console.log(result);
    },
    error=>{
      console.log("error revisa el servicio")
    }
    )


    console.log(this.datos);
  }
}
