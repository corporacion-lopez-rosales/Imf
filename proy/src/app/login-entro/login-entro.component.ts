import { Component, OnInit } from '@angular/core';
import {ExportService} from '../export.service';
import {AuthService} from '../auth.service';
import * as XLSX from 'xlsx';
import {ExcelService} from '../excel.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-entro',
  templateUrl: './login-entro.component.html',
  styleUrls: ['./login-entro.component.css']
})



export class LoginEntroComponent implements OnInit {
  x;
  data:any =[{}
  ];
  prueba;
  archivo;

  id; 
  arreglo:any={
    Lid:null,
    idP:null,
    description:null,
    municipio:null
  };
  matriz:any[]=[{id:null,idP:null,noPar:null,des:null,mun:null}];

  constructor(private excelService:ExportService, public AuthService:AuthService,private excel:ExcelService, private router:Router) { }


  exportAsXLSX():void{
    this.excelService.exportAsExcelFile(this.matriz,'Excel');
  }

  event():void{
    this.excel.addWorksheet(this.matriz);
  }

  ngOnInit() {
    this.x=this.AuthService.mostrarDatos();
    console.log(this.x);
    this.archivo=this.x.cantidadLotes;//55
    console.log(this.archivo);
    this.prueba1();
    //this.exportAsXLSX();
  //  this.event();
    //this.router.navigate(['/Lotes']);

  }


  prueba1(){
    for(var i=0; i<this.archivo; i++)
    {
      var dato = 1+i;
      this.matriz[i]=[this.arreglo.Lid=dato,this.arreglo.idP=this.x.no_parcela,this.arreglo.description=this.x.description,this.arreglo.municipio=this.x.nombre];
    }
    console.log(this.matriz);
  }


  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.prueba = <any>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      console.log(this.prueba);
    };
    reader.readAsBinaryString(target.files[0]);

  }

}


