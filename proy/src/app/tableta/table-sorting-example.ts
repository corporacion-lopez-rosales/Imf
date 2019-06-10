import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
    selector: 'table-sorting-example',
    styleUrls: ['table-sorting-example.scss'],
    templateUrl: 'table-sorting-example.html',
  })


export class TableSorting implements OnInit {
  constructor(private AuthService:AuthService, private routin:Router){  }
  informacion=null
  displayedColumns: string[] = ['no_parcela','tipo','desc_par','noreste','noroeste','sureste','fecha_alta','Eliminar','Modificar'];
  dataSource = new Prueba(this.AuthService);

  ngOnInit(){
    console.log(this.AuthService.almacen);
    this.AuthService.almacen().subscribe(result=>{
      console.log(result);
    },
    error=>{
      console.log(<any>error);
    }
    )
  }


  editar(element){
    this.AuthService.getForm(element);
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


     