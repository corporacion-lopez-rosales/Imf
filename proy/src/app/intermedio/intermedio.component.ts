import { AfterViewInit, Component,OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.scss']
})
export class IntermedioComponent implements OnInit {
  constructor(private AuthService:AuthService, private routin:Router){}
  displayedColumns = ['id', 'no_parcela','medidas','description','valor_compra','firstname','nombre','fecha_alta','Modificar'];
  dataSource=new Prueba(this.AuthService)
  ngAfterViewInit() {
    
  }

  ngOnInit(){
    var prueba=this.AuthService.almacen3();
    prueba.forEach(element => {
      console.log(element);
    });
  }

   editar(row){
    this.AuthService.getForm(row);
  }


  exportExcel(row)
  {
    this.AuthService.getForm(row);
  }


  Nuevo(){
    this.routin.navigate(['/datosGenerales'])
  }

  Salir(){
    window.location.reload();
  }

}



export class Prueba extends DataSource <any>{
  constructor(private AuthService:AuthService){
    super();
  }
  
connect():Observable<any>{
  return this.AuthService.almacen3();
}

disconnect(){

}
}
