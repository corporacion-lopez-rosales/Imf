import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public urlOficial='http://crm.inmobiliariaimf.com/WebServices/index.php/';
  public urlAlm ="http://crm.inmobiliariaimf.com/WebServices/index.php/Almacen/"

  constructor(private http: HttpClient){}

  //mostrar datos en la tabla
  almacen(){
    return this.http.get(`${this.urlAlm}index`)
  }

  //para registrar 

  almReg(Almacen){
    return this.http.post(`${this.urlAlm}post`,JSON.stringify(Almacen))
  }

  almacen2(usuario){
   console.log(usuario);
  }

  //prueba
  obtener(datos){
    console.log(datos);
  }



  login(){
    return this.http.get(`${this.urlOficial}login`)
  }

  registrar(usuario){
    return this.http.post(`${this.urlOficial}Registro`,JSON.stringify(usuario))
  }
 
}
