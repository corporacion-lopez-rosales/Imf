import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  element;
  session;
  public urlAlterno="http://crm.inmobiliariaimf.com/WebServices/index.php/Actualizado/"
  public urlOficial='http://crm.inmobiliariaimf.com/WebServices/index.php/';
  public urlAlm ="http://crm.inmobiliariaimf.com/WebServices/index.php/Almacen/"

  constructor(private http: HttpClient){}
  login(){
    return this.http.get(`${this.urlOficial}login`)
  }

  registrar(usuario){
    return this.http.post(`${this.urlOficial}Registro`,JSON.stringify(usuario))
  }


  //mostrar datos en la tabla
  almacen(){
    return this.http.get(`${this.urlAlm}index`)
  }

  //para registrar 

  almReg(Almacen){
    return this.http.post(`${this.urlAlm}post`,JSON.stringify(Almacen))
  }


  //almacen registro 2.0

  almRef2(Almacen){
    return this.http.post(`${this.urlAlterno}almRegistro`,JSON.stringify(Almacen))
  }



  almAct(prueba){
    return this.http.post(`${this.urlAlm}update`,JSON.stringify(prueba));
  }

 //metodos para obtener los datos a actualizar 

 getForm(reporte){
  this.element=reporte;
  console.log(this.element);
}

mostrarDatos(){
  console.log(this.element);
  return this.element;
  
}

getid(id){
 console.log(this.session);
  this.session=id
  this.showID();
}

showID(){
  console.log(this.session)
  return this.session;
}
 
}
