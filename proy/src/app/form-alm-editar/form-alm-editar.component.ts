import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm}  from '@angular/forms';
import {Almacen} from '../Modelo/Almace';

@Component({
  selector: 'app-form-alm-editar',
  templateUrl: './form-alm-editar.component.html',
  styleUrls: ['./form-alm-editar.component.css']
})
export class FormAlmEditarComponent implements OnInit {
  public Almacen:Almacen;

  constructor(public AuthService:AuthService) {
    this.Almacen=new Almacen(0,'','','','','','','','','','','');
  }
  x;
  articulo= {
    id:null,
    no_parcela:null,
    tipo:null,
    desc_par:null,
    norte:null,
    sur:null,
    este:null,
    oeste:null,
    noreste:null,
    sureste:null,
    suroeste:null,
    fecha_alta:null
  }


  ngOnInit() {
    this.articulo;
    console.log(this.articulo);

    this.AuthService.almacen().subscribe(result=>{
      console.log(result);
    },
    error=>{
      console.log(<any>error)
    })

    
  }


  
  onSubmit(form:NgForm){
    this.AuthService.almReg(this.Almacen).subscribe(result=>{
      console.log(result)
    },
    error=>{
      console.log(<any>error);
    }
    )
    console.log(this.Almacen);
  }



}
