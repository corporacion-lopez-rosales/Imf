import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {DatosGenerales} from '../Modelo/DatosGenerales';
import {Pueba} from '../Modelo/Prueba2';



@Component({
  selector: 'app-pruebas',
  templateUrl:'./pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  public datos:DatosGenerales
  public prueba:Pueba
  num=0;
  Lotes =[];
  arreglo;
  constructor( public AuthService:AuthService){
    this.prueba=new Pueba(0,'','','','','','',0);
  }

 // x=this.AuthService.showID()
  ngOnInit() {
    this.prueba.no_parcela=39511;
    this.prueba.proveedor="Angel";
    this.prueba.municipio="San nicolas";
  }


  onSubmit(){
    this.num ++;
   this.arreglo={
      parcela:this.prueba.no_parcela,
      pro:this.prueba.proveedor,
      mun:this.prueba.municipio,
      nor:this.prueba.norte,
      sur:this.prueba.sur,
      est:this.prueba.este,
      oes:this.prueba.oeste,
      num:this.num
    };
    console.log(this.arreglo);
    this.Lotes.push(this.arreglo);
    console.log(this.Lotes);
    this.limpiar();
  }

  limpiar(){
    this.arreglo=null;
  }

}


