import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm}  from '@angular/forms';

@Component({
  selector: 'app-form-alm-editar',
  templateUrl: './form-alm-editar.component.html',
  styleUrls: ['./form-alm-editar.component.css']
})
export class FormAlmEditarComponent implements OnInit {

  prueba={
    id:null,
    no_parcela:null, 
    tipo:null,
    desc_par:null,
    norte:null, 
    sur:null, 
    este:null, 
    oeste:null, 
    noreste:null, 
    noroeste:null, 
    sureste:null, 
    suroeste:null, 
    fecha_alata:null
  }



  constructor(public AuthService:AuthService) {
  }
  x;


  ngOnInit() {
      this.x = this.AuthService.mostrarDatos();
      this.prueba={
      id:this.x.id,
      no_parcela:this.x.no_parcela,
      tipo:this.x.tipo,
      desc_par:this.x.desc_par, 
      norte:this.x.norte, 
      sur:this.x.sur,
      este:this.x.este, 
      oeste:this.x.oeste,
      noreste:this.x.noreste, 
      noroeste:this.x.noroeste, 
      sureste:this.x.sureste, 
      suroeste:this.x.suroeste,
      fecha_alata:this.x.fecha_alata
    }
    console.log(this.prueba);
  }


  
  onSubmit(form:NgForm){
    this.AuthService.almAct(this.prueba).subscribe(result=>{
      console.log(this.prueba);
      console.log(result);
    },
    error=>{
      console.log(<any>error);
    }
    )
    console.log(this.prueba);
  }



}


