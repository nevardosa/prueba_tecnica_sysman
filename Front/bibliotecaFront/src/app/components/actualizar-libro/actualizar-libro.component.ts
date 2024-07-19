import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent implements OnInit {

  formularioCrear: FormGroup;
  id: any;
  libro:  LibroModel [] = [];
  
  constructor( private actRoute: ActivatedRoute, 
              private libroServ: LibrosService, 
              private router: Router,
              private fb: FormBuilder) {

    this.actRoute.params.subscribe(param => {
      this.id =  param["id"];
    });
    
    this.buscarLibro(this.id);
  }

  ngOnInit() {
    this.crearFormulario();
    
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

  actualizarLibro() {
      this.libroServ.actualizarLibro(this.id).subscribe(resp => {
    });
  }


  buscarLibro(id: number){  
     
      this.libroServ.buscarLibro(this.id).subscribe( (libro: LibroModel) => {
        this.libro.push(libro);

      } );
      console.log("--------------------->> ", this.libro);

  }
  regresar(){
    this.router.navigate(['/libro']);
   }
}
