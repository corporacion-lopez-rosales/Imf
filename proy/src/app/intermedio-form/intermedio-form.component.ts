import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Nuevo} from '../Modelo/prueba';
import {Router} from '@angular/router';
import {NumeralPipe } from 'ngx-numeral';

@Component({
  selector: 'app-intermedio-form',
  templateUrl: './intermedio-form.component.html',
  styleUrls: ['./intermedio-form.component.scss']
})
export class IntermedioFormComponent implements OnInit {

  prueba={
    id_colin:null, 
    no_parcela:null,
    id_proveedor:null,
    id_municipio:null, 
    hectarias:null
  }
  public Nuevo:Nuevo

  constructor(public AuthService:AuthService,private router:Router) {
  }
  x;
  total1;
  totalLotes;
  lotesC;
  LotesMun;
  
  mun:Municipio[]=[
    {value:"1",viewValue:'Montemorelos'},
    {value:"2",viewValue:'Cadereyta'},
    {value:"3",viewValue:'Salinas'},
    {value:"4",viewValue:'Saltillo'}
  ]

  pro:Proveedor[]=[
    {value:"1",viewValue:"Pedro"},
    {value:"2",viewValue:"Angel"},
    {value:"3",viewValue:"Miguel"}
  ]

  
  M2AV; //Area vendible
  M2AM; //Area municipal
  M2AVi; //Area vial
  M2Tol; //Total en metros cuadrados
  M2HA;  //Hectarias adquiridas en metros cuadrados
  ngOnInit() {
    this.x=this.AuthService.mostrarDatos();
    this.prueba={
      id_colin:this.x.id,
      no_parcela:this.x.no_parcela,
      id_proveedor:this.x.id_proveedor,
      id_municipio:this.x.id_municipio,
      hectarias:this.x.medidas
    }

    this.Nuevo={
      id_colin:this.prueba.id_colin,
      id_municipio:this.prueba.id_municipio,
      id_proveedor:this.prueba.id_proveedor,
      hectarias:this.prueba.hectarias,
      vendible:0,
      areavial:0,
      areampa:0,
      cantidadLotes:0,
      observacion:null
    }
    var tol = new NumeralPipe(this.prueba.hectarias * 10000).format('0,0.0000');
    this.M2HA=tol;
  }


  total(){
    this.total1=this.Nuevo.vendible + this.Nuevo.areampa + this.Nuevo.areavial;
    this.totalLotes=  this.lotesC + this.LotesMun;
    this.Nuevo.cantidadLotes=this.totalLotes;
    this.conversion();
  }

  conversion(){
    var y = new NumeralPipe(this.Nuevo.vendible * 10000).format('0,0.0000');
    var x = new NumeralPipe(this.Nuevo.areampa  * 10000).format('0,0.0000');
    var z = new NumeralPipe(this.Nuevo.areavial * 10000).format('0,0.0000');
    var t = new NumeralPipe(this.total1 * 10000).format('0,0.0000');
    this.M2AV =  y;
    this.M2AM =  x;
    this.M2AVi= z;
    this.M2Tol= t;
    console.log(this.Nuevo.vendible);
    console.log(this.M2AV);
  }

  regresar(){
     this.router.navigate([''])
  }

  
  onSubmit(){
    if(this.total1 == this.Nuevo.hectarias && this.M2Tol == this.M2HA  ){
      this.AuthService.intermediario(this.Nuevo).subscribe(result=>{
        console.log(result);
      },
      error=>{
        console.log(<any>error);
      })
    }
    else{
      alert("Datos equivocados")
    }
  }

}



export interface Municipio
{
  value:string;
  viewValue:string;
}


export interface Proveedor 
{
  value:string;
  viewValue:string;
}