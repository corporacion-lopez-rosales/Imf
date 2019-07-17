import { Injectable,OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import * as ExcelProper from 'exceljs';
import * as fs from 'file-saver';



@Injectable({
  providedIn: 'root'
})
export class ExcelService   {

  prueba;
  constructor(public AuthService:AuthService) { }

  addWorksheet(data:any[]){
    //const title='Reporte de lotes';
    const header=["Id_Lote","Num.parcela","Tipo fracionamiento","Municipio","Status","Medida","Norte","Sur","Oeste","Este"]
 
    let workbook:ExcelProper.Workbook=new Excel.Workbook();
    let worksheet=workbook.addWorksheet('Prueba');

   // let titleRow = worksheet.addRow([title]);
   // titleRow.font = {name:'Arial', family:4,size:12,underline:'double',bold:true};
    worksheet.addRow([]);
    let  headerRow=worksheet.addRow(header);
    headerRow.eachCell((cell,Number)=>{
      cell.fill={
        type:'pattern',
        pattern:'solid',
        fgColor:{argb:'FFFFFF00'},
        bgColor:{argb:'FF0000FF'}
      }
      cell.border={top:{style:'thin'},left:{style:'thin'},bottom:{style:'thin'},right:{style:'thin'}}
    })

    data.forEach(d=>{
      let row = worksheet.addRow(d);
      row.font={name:'Arial',family:4,size:12};
      console.log(d);
     // let qty=row.getCell(5);
     // let color = 'FF99FF99';
     // if(qty.value<500){
     //   color='FF9999'
     // }

   /*   qty.fill={
        type:'pattern',
        pattern:'solid',
        fgColor:{argb:color}
      }*/
    });
    worksheet.getColumn(3).width=30;
    worksheet.getColumn(4).width=30;
    worksheet.addRow([]);



    workbook.xlsx.writeBuffer().then((data)=>{
      let blob= new Blob([data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob,'Prueba.xlsx');
    })

  }
  
}
