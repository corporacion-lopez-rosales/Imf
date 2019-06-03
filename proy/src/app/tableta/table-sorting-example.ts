import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

export interface Usuario {
  username:string,
  password:string
}
@Component({
    selector: 'table-sorting-example',
    styleUrls: ['table-sorting-example.css'],
    templateUrl: 'table-sorting-example.html',
  })


export class TableSorting implements OnInit {
  constructor(private AuthService:AuthService){  }
  informacion=null
  displayedColumns: string[] = ['username', 'password','Eliminar','Modificar'];
  dataSource = new Prueba(this.AuthService);

  ngOnInit(){
  }

}


export class Prueba extends DataSource <any>{
    constructor(private AuthService:AuthService){
      super();
    }
    
  connect():Observable<any>{
    return this.AuthService.imflogin();
  }

  disconnect(){

  }
}


     