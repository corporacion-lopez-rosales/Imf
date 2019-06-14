import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms'; 
import * as moment from 'moment';



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


  constructor(public AuthService:AuthService) {
  }
  x;

  ngOnInit() {
    
    var date;
    this.x=this.AuthService.mostrarDatos();
    date=this.x.fecha_alta;
    let now=moment(date).format("YYYY-MM-DD");
    
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
      valor_compra:this.x.valor_compra
    }
  
  }

  onSubmit(form:NgForm){
    this.AuthService.DatosActual(this.prueba).subscribe(result=>{
      alert("Datos enviados");
    },
    error=>{
      alert("Error en servisio");
    }
    )

  }

}
