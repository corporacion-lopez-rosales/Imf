import { Component, OnInit } from '@angular/core';
import {DatosGenerales} from '../Modelo/DatosGenerales';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  public datos:DatosGenerales
  constructor() { this.datos=new DatosGenerales(0,'','','','','','','','','','',"",0,0,0,0) }

  ngOnInit() {
  }


  onSubmit(ng:Form){
    console.log(this.datos);
  }
}
