import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url='https://servitek.clrswap.com/proy-servicios/index.php/Controlador_imf/';

  public url2='https://servitek.clrswap.com/proy-servicios/index.php/Controlador_imfr/';
  
  public urlOficial='http://crm.inmobiliariaimf.com/WebServices/index.php/';

  constructor(private http: HttpClient){}


  imflogin() {
    return this.http.get(`${this.url}imflogin`);
  }

  imfregistrar(credenciales) {
    return this.http.post(`${this.url2}imfregistrar.php`, JSON.stringify(credenciales));    
  }

  almacen(){
    console.log("entra")
    return this.http.get(`${this.urlOficial}Prueba`);
  }
  
}
