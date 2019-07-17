import { Component, OnInit } from '@angular/core';
import {DatosGenerales} from '../Modelo/DatosGenerales';
import {Proveedor} from '../Modelo/Proveedor';
import { Form } from '@angular/forms';
import {AuthService} from '../auth.service';
import {NumeralPipe } from 'ngx-numeral';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';




//this.x es la variable que contiene el id del usuario que esta logeado 
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  public datos:DatosGenerales; 
  public proveedor:Proveedor;
  constructor(public AuthService:AuthService,private _snackBar:MatSnackBar,public router:Router) { 
  this.datos=new DatosGenerales(0,0,'','','','','','','','','',"",0,0,0,this.x,0),
  this.proveedor=new Proveedor('','','','','');
  }
  x=this.AuthService.showID()
  p;
  y;
  nombre;
  arreglo;

  mun:Municipio[]=[
    {value:1,viewValue:'Montemorelos'},
    {value:2,viewValue:'Cadereyta'},
    {value:3,viewValue:'Salinas'},
    {value:4,viewValue:'Saltillo'}
  ]
  tipo:Tipo[]=[
    {value:1,viewValue:'Fracionamiento'},
    {value:2,viewValue:'Co-propiedad'}
  ]

  ngOnInit() {

  }

  formato(){
    this.y= new NumeralPipe(this.datos.valor_compra).format('0,0');
    this.datos.valor_compra=this.y;
  }

  onSubmit(ng:Form){
    this.AuthService.almReg2(this.datos).subscribe(result=>{
      this.openSnackBar("Parcela Registrada",`Aceptar ${this.router.navigate(['tablaDatos'])}`)
    },
    error=>{
      console.log(<any>error);
    }
    )
  }

  onSubmitPro(ng:Form){
    this.AuthService.proveedor(this.proveedor).subscribe(result=>{
      console.log(result);
      this.nombre=this.proveedor.nombre;
      this.openSnackBar("Provedor Registrado","Ok");
    },
    error=>{
      console.log(<any>error);
    });
    this.obtenerid();
  }

  Regresar(){
    this.datos=null;
    this.proveedor=null;
    this.router.navigate(['tablaDatos'])
  }



  obtenerid(){
    this.AuthService.proveedorget().subscribe(result=>{
      this.arreglo=Array(result);
      var long=this.arreglo[0].length;
      for(var i=0; i<long; i++){
        if(result[i]['nombre']==this.nombre)
        {
         this.p=result[i]['id_proveedor']
         this.datos.id_proveedor=this.p;
        }
      }
    },
    error=>{
      console.log(<any>error);
    })
  } 

  openSnackBar(message:string,action:string){
    this._snackBar.open(message,action,{
      duration:4000,
    })
  }


}





export interface Municipio
{
  value:number;
  viewValue:string;
}

export interface Tipo 
{
  value:number;
  viewValue:string;
}