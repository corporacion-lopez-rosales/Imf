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
import {MatButtonModule,MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatRadioModule,MatCheckboxModule,MatTableModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEntroComponent,
    HomeComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,
    FormsModule,MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatRadioModule ,MatCheckboxModule,MatFormFieldModule,MatTableModule,
    AppRoutingModule,
    HttpClientModule,
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
      
    ])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
