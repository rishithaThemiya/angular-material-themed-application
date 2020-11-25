import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudCountryComponent } from './crud-country/crud-country.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCountryComponent } from './create-country/create-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { ServiceCountry } from './service/service.component';
import { MatCardModule} from '@angular/material/card';



// const material = [
//   MatButtonModule,
//   MatIconModule,
//   MatDialogModule,
//   MatTableModule
// ];


@NgModule({
  declarations: [
    AppComponent,
    CrudCountryComponent,
    CreateCountryComponent,
    UpdateCountryComponent,
    DeleteCountryComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    ServiceCountry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
