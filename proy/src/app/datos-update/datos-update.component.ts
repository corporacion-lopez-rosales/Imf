import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms'; 
import * as moment from 'moment';
import {Router} from '@angular/router';
import {NumeralPipe} from 'ngx-numeral';



@Component({
  selector: 'app-datos-update',
  templateUrl: './datos-update.component.html',
  styleUrls: ['./datos-update.component.scss']
})



export class DatosUpdateComponent implements OnInit {
  prueba={
     id:null,
     no_parcela:null,
     id_tipo:null,
     desc_par:null,
     norte:null,
     sur:null,
     este:null,
     oeste:null,
     noreste:null,
     noroeste:null,
     sureste:null,
     suroeste:null,
     fecha_alta:null,
     id_municipio:null,
     id_proveedor:null,
     medidas:null,
     user_id:null,
     valor_compra:null
  }


  constructor(public AuthService:AuthService, public routin:Router) {
  }
  x;

  mun:Municipio[]=[
    {value:"1",viewValue:'Montemorelos'},
    {value:"2",viewValue:'Cadereyta'},
    {value:"3",viewValue:'Salinas'},
    {value:"4",viewValue:'Saltillo'}
  ]
  tipo:Tipo[]=[
    {value:"1",viewValue:'Fracionamiento'},
    {value:"2",viewValue:'Co-propiedad'}
  ]



  ngOnInit() {
    //Usar la libraria moment para dar formato a fecha desde front 
    var date;
    this.x=this.AuthService.mostrarDatos();
    date=this.x.fecha_alta;
    let now=moment(date).format("YYYY-MM-DD");
    //formato para el valor de compa para cuando actualizas
    var formato1;
    formato1=new NumeralPipe(this.x.valor_compra).format('0,0');

    this.prueba={
      id:this.x.id,
      no_parcela:this.x.no_parcela,
      id_tipo:this.x.id_tipo,
      desc_par:this.x.desc_par,
      norte:this.x.norte,
      sur:this.x.sur,
      este:this.x.este,
      oeste:this.x.oeste,
      noreste:this.x.noreste,
      noroeste:this.x.noroeste,
      sureste:this.x.sureste,
      suroeste:this.x.suroeste,
      fecha_alta:now,
      id_municipio:this.x.id_municipio,
      id_proveedor:this.x.id_proveedor,
      medidas:this.x.medidas,
      user_id:this.x.user_id,
      valor_compra:formato1
    }
  
  }


  Regresar(){
    this.routin.navigate(['/tablaDatos'])
  }

  Salir(){
    window.location.reload();
  }

  onSubmit(form:NgForm){
    this.AuthService.DatosActual(this.prueba).subscribe(result=>{
      this.routin.navigate(['/tablaDatos'])
    },
    error=>{
      alert("Error en servisio");
    }
    )

  }

}


export interface Municipio
{
  value:string;
  viewValue:string;
}

export interface Tipo 
{
  value:string;
  viewValue:string;
}