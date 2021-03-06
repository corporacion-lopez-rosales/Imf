import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginEntroComponent } from './login-entro/login-entro.component';
import {RouterModule}from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule,ReactiveFormsModule}from '@angular/forms';
import {MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatRadioModule,MatCheckboxModule,MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableSorting} from './tableta/table-sorting-example';
import { FormAlmComponent } from './form-alm/form-alm.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormAlmEditarComponent } from './form-alm-editar/form-alm-editar.component';
import { DatosComponent } from './datos/datos.component';
import { DatosTableComponent } from './datos-table/datos-table.component';
import { DatosUpdateComponent } from './datos-update/datos-update.component';
import {MomentModule} from 'ngx-moment';
import {AlertModule} from 'ngx-alerts';
import { IntermedioComponent } from './intermedio/intermedio.component';
import { IntermedioFormComponent } from './intermedio-form/intermedio-form.component';
import {ListadoLotesComponent} from './listado-lotes/listado-lotes.component';
import {DataTableModule} from 'angular-6-datatable';
import { PruExportComponent } from './pru-export/pru-export.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFileUploadModule } from 'angular-material-fileupload';
import {NumericTextboxModule} from 'ngx-numeric-textbox'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEntroComponent,
    HomeComponent,
    RegistrarComponent,
    TableSorting,
    FormAlmComponent,
    FormAlmEditarComponent,
    DatosComponent,
    DatosTableComponent,
    DatosUpdateComponent,
    IntermedioComponent,
    IntermedioFormComponent,
    ListadoLotesComponent,
    PruExportComponent,
    PruebasComponent

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,
    FormsModule,MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatRadioModule ,MatCheckboxModule,MatFormFieldModule,MatTableModule,
    AppRoutingModule,MatExpansionModule,MatSelectModule,
    HttpClientModule,MatTabsModule,MatInputModule,MatDatepickerModule,MatSnackBarModule,
    MomentModule,NumericTextboxModule,DataTableModule,MatFileUploadModule,
    AlertModule.forRoot({maxMessages:5,timeout:5000,position:'right'}),
    RouterModule.forRoot([
    
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'login-entro',
        component: LoginEntroComponent
      },

      {
        path: 'registrar',
        component: RegistrarComponent
      },


      {
        path: '',
        component: HomeComponent
      },
      {
        path:'inventario',
        component:TableSorting
      },
      {
        path:'inventario/crear',
        component:FormAlmComponent
      },
      {
        path:'inventario/actualizar',
        component:FormAlmEditarComponent
      },
      {
        path:'datosGenerales',
        component:DatosComponent
      },
      {
        path:'tablaDatos',
        component:DatosTableComponent
      },
      {
        path:'datosGenerales/update',
        component:DatosUpdateComponent
      },
      {
        path:'testeo',
        component:IntermedioComponent
      },
      {
        path:'testeo/Datos',
        component:IntermedioFormComponent
      },
      {
        path:'Lotes',
        component:ListadoLotesComponent
      },
      {
        path:'excel',
        component:PruExportComponent
      },
      {
        path:'prueba',
        component:PruebasComponent
      }
    ]),
    MatPaginatorModule,
    MatSortModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
