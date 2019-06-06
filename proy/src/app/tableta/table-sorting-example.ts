import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

export interface Usuario {
id:number,
no_parcela:number,
tipo:string,
desc_par:string,
noreste:string,
noroeste:string,
sureste:string,
suroeste:string,
fecha_alta:Date
}
@Component({
    selector: 'table-sorting-example',
    styleUrls: ['table-sorting-example.css'],
    templateUrl: 'table-sorting-example.html',
  })


export class TableSorting implements OnInit {
  constructor(private AuthService:AuthService){  }
  informacion=null
  displayedColumns: string[] = ['no_parcela','tipo','desc_par','noreste','noroeste','sureste','fecha_alta'];
  dataSource = new Prueba(this.AuthService);

  ngOnInit(){
    console.log(this.AuthService.almacen);
  }

}


export class Prueba extends DataSource <any>{
    constructor(private AuthService:AuthService){
      super();
    }
    
  connect():Observable<any>{
    return this.AuthService.almacen();
  }

  disconnect(){

  }
}


     