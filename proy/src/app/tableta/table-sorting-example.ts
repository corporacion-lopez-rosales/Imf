import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'table-sorting-example',
    styleUrls: ['table-sorting-example.scss'],
    templateUrl: 'table-sorting-example.html',
  })


export class TableSorting implements OnInit {
  constructor(private AuthService:AuthService, private routin:Router){  }
  arreglo;

  displayedColumns: string[] = ['no_parcela','tipo','desc_par','noreste','noroeste','sureste','fecha_alta','Eliminar','Modificar'];
  dataSource:any;


  ngOnInit(){
    this.renderTable();
  }

  renderTable(){
    this.AuthService.almacen().subscribe(x=>{
      this.dataSource=new MatTableDataSource();
      this.dataSource.data=x;
      console.log(this.dataSource.data);
    },
    error=>{
      console.log('Este metodo no funciona');
    });
  }

  editar(element){
    this.AuthService.getForm(element);
  }


  Nuevo(){
    this.routin.navigate(['/datosGenerales'])
    
  }

  applyFilter(filterValue:string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLowerCase();
    this.dataSource.filter=filterValue;
  }

}


