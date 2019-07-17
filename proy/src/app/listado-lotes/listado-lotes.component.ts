import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listado-lotes',
  templateUrl: './listado-lotes.component.html',
  styleUrls: ['./listado-lotes.component.scss']
})

export class ListadoLotesComponent implements OnInit {
  constructor(private AuthService:AuthService, private routin:Router){  }
  arreglo;

  displayedColumns: string[] = ['id','no_parcela','description','nombre','Modificar','Exportar'];
  dataSource:any;


  ngOnInit(){
    this.renderTable();
  }

  renderTable(){
     this.AuthService.ExcelExport().subscribe(x=>{
      console.log(x);
      this.dataSource=new MatTableDataSource();
      this.dataSource.data=x;
      console.log(x);
      console.log(this.dataSource.data);
    },
    error=>{
      console.log(<any>error);
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

  archive(element){
    console.log(element);
    this.AuthService.getForm(element);
  }

}