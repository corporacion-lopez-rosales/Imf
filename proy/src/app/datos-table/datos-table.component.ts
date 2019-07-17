import {Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-datos-table',
  templateUrl: './datos-table.component.html',
  styleUrls: ['./datos-table.component.scss']
})
export class DatosTableComponent implements OnInit {
  constructor(private AuthService:AuthService, private routin:Router){}
  displayedColumns = ['id', 'no_parcela','medidas','description','valor_compra','firstname','nombre','fecha_alta','Modificar'];
  dataSource:any;


  ngOnInit(){
    this.renderTable();
  }

   editar(row){
    this.AuthService.getForm(row);
  }


  Nuevo(){
    this.routin.navigate(['/datosGenerales'])
  }

  Salir(){
    window.location.reload();
  }


  renderTable(){
    this.AuthService.almacen3().subscribe(x=>{
      this.dataSource=new MatTableDataSource();
      this.dataSource.data=x;
    },
    error=>{
      console.log(<any>error)
    });
  }


  applyFilter(filterValue:string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLowerCase();
    this.dataSource.filter=filterValue;
  }

}



