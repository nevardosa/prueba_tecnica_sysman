import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibroModel } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  /*url: string = 'http://localhost:8105/libros';
  urlAut: string = 'http://localhost:8105/autores';
*/
  constructor( private http: HttpClient) { }

  listadoLibros(){
    return this.http.get(`libros/listar`);
  }

  crearLibro( libro: LibroModel){
    console.log("Creando el libro ----> ",libro);
      return this.http.post(`libros/crear`, libro);
  }

  actualizarLibro(libro: LibroModel){
    console.log("Servicio actualizar libro ", libro);
      return this.http.put(`libros/actualizar/${libro.id}`, libro);
  }

  eliminarLibro(id: number){
    return this.http.delete(`libros/eliminar/${id}`);
  }

  buscarLibro(id: number){
    console.log("Servicio de buscar ", id);
      return this.http.get(`libros/consultar/${id}`);
  }

  listarAutores(){
    return this.http.get(`libros/listaAutores`);
  }
}
