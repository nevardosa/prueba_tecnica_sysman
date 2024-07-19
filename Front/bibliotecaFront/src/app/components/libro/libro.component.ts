import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorModel } from 'src/app/models/autor.model';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  titulo: string = "Biblioteca de libros";
  btnCrearLibro: string = "Crear libro";

  id: string = "Id";
  titulolibro: string = "Titulo";
  descripcion: string = "Descripción";
  fecha: string = "Fecha publicación";
  autor: string = "Autor";
  accion: string = "Acciones";

  sinRegistros : string = "No hay registros";

  listLibros : LibroModel [] = [];


  constructor( private libroServ: LibrosService, private router: Router) { }

  ngOnInit() {
    this.listarLibros();
  }

  listarLibros(){
    this.libroServ.listadoLibros().subscribe( (libros: LibroModel) => {
       this.listLibros[0] = libros;
    });    
  }
  actualizarLibro(libro: LibroModel){
    this.router.navigate(['/actualizarLibro', libro.id]);
  }

  crearLibro(){
    this.router.navigate(['/nuevolibro']);
  }

  eliminarLibro(libro: LibroModel, idx: number ){
    Swal.fire({
      title: "Eliminar",
      text: `Desea eliminar ${libro.titulo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      this.listLibros.splice(idx, 1);
      this.libroServ.eliminarLibro(libro.id).subscribe();      
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registro eliminado!",
          text: `El libro ${libro.titulo} se ha eliminado satisfactoriamente`,
          icon: "success"
        });
      }
      this.listarLibros();
    });
  }

  buscarLibroPorAutor(idLibro: number){
    if(idLibro != 0){
      this.libroServ.buscarLibro(idLibro).subscribe( (libro: LibroModel) => {
        this.listLibros = [];
        this.listLibros.push(libro);

      } );
    }else{
     // this.listarLibros();
    }

  }

}
