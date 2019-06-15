import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Nuevo} from '../Modelo/prueba';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-intermedio-form',
  templateUrl: './intermedio-form.component.html',
  styleUrls: ['./intermedio-form.component.scss']
})
export class IntermedioFormComponent implements OnInit {
  prueba={
    id_colin:null,
    id_proveedor:null,
    id_municipio:null,
    no_parcela:null,
    hectarias:null
  }
  hectarias=new FormControl(0);
  areaVial=new FormControl(0);
  areampa= new FormControl(0);

  public Nuevo:Nuevo

  constructor(public AuthService:AuthService) {
    this.Nuevo= new Nuevo(this.prueba.id_colin,this.prueba.id_proveedor,this.prueba.id_municipio,this.prueba.no_parcela,this.prueba.hectarias,0,0,0,0)
  }
  x;
  ngOnInit() {
    this.x=this.AuthService.mostrarDatos();
    console.log(this.x)
    this.prueba={
      id_colin:this.x.id,
      id_proveedor:this.x.id_proveedor,
      id_municipio:this.x.id_municipio,
      no_parcela:this.x.no_parcela,
      hectarias:this.x.medidas
    }
    
  }




  onSubmit(form:NgForm){
    this.AuthService.intermedio(this.Nuevo).subscribe(result=>{
      console.log(result);
      alert('Datos Enviados');
      
    },
    error=>{
      console.log(<any>error);
      alert('Error');
    })
  }

}
