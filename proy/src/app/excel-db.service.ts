import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import * as ExcelProper from 'exceljs';
import * as fs from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class ExcelDBService {
  prueba;
  long;
  datos={
    id_lote:null,
    no_parcela:null, 
    region:null,
    Proveedor:null
  }
  constructor(public AuthService:AuthService) { }

  Excel(){
    this.AuthService.DatosExcel().subscribe(result=>{
      this.prueba=Array(result)
    },
    error=>{
      console.log(<any>error);
    })
    const tittle ='Reporte de Lotes';
    const header=["Numero_Lote","Parcela","Region","Proveedor","Colindancias","Status"];
    let workbook:ExcelProper.Workbook=new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Base de datos');
    let titleRow = worksheet.addRow([tittle]);
    titleRow.font={name:'arial',family:4,size:12,underline:'double',bold:true};
    worksheet.addRow([]);
    let headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell,Number)=>{
      cell.fill={
        type:'pattern',
        pattern:'solid',
        fgColor:{argb:'FFFFFF00'},
        bgColor:{argb:'FF0000FF'}
      }
      cell.border={top:{style:'thin'},left:{style:'thin'},bottom:{style:'thin'}}
    })

    this.prueba.forEach(d => {
     console.log(d);
     let row = worksheet.addRow(d);
     let qty=row.getCell(5);
     let color = 'FF99FF99';
     qty.fill={
       type:'pattern',
       pattern:'solid',
       fgColor:{argb:color}
     }
    });
    this.prueba.forEach(d=>{
      d.forEach(a=>{
        this.datos.Proveedor=a.nombre;
        this.datos.id_lote=a.cantidadLotes;
        console.log(this.datos.Proveedor);
        console.log(this.datos.id_lote);
        console.log(a);
      })
    })


    worksheet.getColumn(3).width=100;
    worksheet.getColumn(4).width=70;
    worksheet.addRow([]);

    workbook.xlsx.writeBuffer().then((data)=>{
      let blob = new Blob([data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob,'Datos.xlsx');
    })

  }
}
