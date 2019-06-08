import { Component, OnInit } from '@angular/core';
import {Almacen} from '../Modelo/Almace';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-alm',
  templateUrl: './form-alm.component.html',
  styleUrls: ['./form-alm.component.css']
})
export class FormAlmComponent implements OnInit {
  panelOpenState = false;
  public Almacen:Almacen;
  constructor(private AuthService:AuthService) { 
    this.Almacen=new Almacen(0,'','','','','','','','','','','')
  }

  ngOnInit() {
    
  }

  onSubmit(form:NgForm){
    this.AuthService.almReg(this.Almacen).subscribe(result=>{
      console.log(result)
    },
    error=>{
      console.log(<any>error);
    }
    )
    console.log(this.Almacen);
  }
}