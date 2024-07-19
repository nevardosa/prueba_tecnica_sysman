import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorModel } from 'src/app/models/autor.model';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  formularioCrear: FormGroup;
  listaAutores: AutorModel []= [];

  constructor(private router: Router, 
              private fb: FormBuilder, 
              private libroServ: LibrosService) { }

  ngOnInit() {

   this.crearFormulario();
   this.listAutores();
  }
  crearFormulario() {
   this.formularioCrear = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      idAutor: ['', Validators.required]
    }); 
  }


  get tituloNoValido() {
    return this.formularioCrear.get('titulo').invalid && this.formularioCrear.get('titulo').touched
  }

  get descripcionNoValido() {
    return this.formularioCrear.get('descripcion').invalid && this.formularioCrear.get('descripcion').touched
  }

  get fechaPublicacionNoValido() {
    return this.formularioCrear.get('fechaPublicacion').invalid && this.formularioCrear.get('fechaPublicacion').touched
  }
  get autorNoValido() {
    return this.formularioCrear.get('idAutor').invalid && this.formularioCrear.get('idAutor').touched
  }

  crearLibro(){

    this.formulaioInvalido();
    this.libroServ.crearLibro(this.formularioCrear.value).subscribe( resp => {
      Swal.fire({
        title: "Libro creado exitosamente",
        icon: "success"
      });
    });
    this.formularioCrear.reset();
   }

   regresar(){
    this.router.navigate(['/libro']);
   }

   formulaioInvalido(){
    if ( this.formularioCrear.invalid ) {
      return Object.values( this.formularioCrear.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
     
    }
   }

   listAutores(){
    this.libroServ.listarAutores().subscribe( (autores:AutorModel) => {

      this.listaAutores.push(autores);
  
     console.log("Lista autores ---> ", this.listaAutores[0]);
    });
  }
}
