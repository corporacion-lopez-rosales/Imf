import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Nuevo} from '../Modelo/prueba';

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

  constructor(public AuthService:AuthService) {
  }
  x;
  total1;
  totalLotes;
  lotesC;
  LotesMun;
  
  
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
      observacion:''
    }
    this.M2HA=this.prueba.hectarias *10000;
  }


  total(){
    this.total1=this.Nuevo.vendible + this.Nuevo.areampa + this.Nuevo.areavial;
    this.totalLotes=  this.lotesC + this.LotesMun;
    this.Nuevo.cantidadLotes=this.totalLotes;
    this.conversion();
  }

  conversion(){
    this.M2AV=this.Nuevo.vendible * 10000;
    this.M2AM=this.Nuevo.areampa * 10000;
    this.M2AVi=this.Nuevo.areavial * 10000;
    this.M2Tol=this.total1 * 10000;
    console.log(this.M2AV);
    console.log(this.M2AM);
    console.log(this.M2AVi);
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

 /* onSubmit(){
  console.log(this.prueba);
  console.log(this.Nuevo);
  this.AuthService.intermediario(this.Nuevo).subscribe(result=>{
    console.log(result);
  },
  error=>{
    console.log(<any>error);
  }
  )
  }
*/



}