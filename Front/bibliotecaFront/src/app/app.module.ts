import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { NuevoLibroComponent } from './components/nuevo-libro/nuevo-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    NuevoLibroComponent,
    ActualizarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
