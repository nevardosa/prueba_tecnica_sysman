package com.sisma.biblioteca.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sisma.biblioteca.models.entity.Autor;
import com.sisma.biblioteca.models.entity.Libro;
import com.sisma.biblioteca.models.service.IAutorService;
import com.sisma.biblioteca.models.service.ILibroService;

@ControllerAdvice
@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/libros")
public class LibroController {

	@Autowired
	private ILibroService libroService;
	
	@Autowired
	private IAutorService autorServices;

	
	@PostMapping(path = "/crear", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public Libro crearLibro(@RequestBody Libro libro) {
		return libroService.crearLibro(libro); 
	} 
	
	@GetMapping(path = "/listar", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Libro> listarLibros(){
		return libroService.ListaLibros();
	}
	
	@GetMapping(path = "/consultar/{idLibro}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Libro consultarLibro(@PathVariable Integer idLibro) {
		return libroService.buscarLibro(idLibro);
	}
	
	@PutMapping(path = "/actualizar/{idLibro}")
	@ResponseStatus(HttpStatus.CREATED)
	public Libro actualizarLibro(@PathVariable Integer idLibro, @RequestBody Libro libro) {
		Libro existeLibro = libroService.buscarLibro(idLibro);
		if(existeLibro.getId() == null) {
			return existeLibro;
		}
		existeLibro.setTitulo(libro.getTitulo());
		existeLibro.setDescripcion(libro.getDescripcion());
		existeLibro.setFechaPublicacion(libro.getFechaPublicacion());
		existeLibro.setIdAutor(libro.getIdAutor());
		return libroService.actualizarLibro(existeLibro);
	}
	
	@DeleteMapping(path = "/eliminar/{idLibro}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void eliminarLibro(@PathVariable Integer idLibro) {
		libroService.eliminarLibro(idLibro);
	} 
	
	@GetMapping(path = "/listaAutores", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Autor> listarAutores(){
		return autorServices.ListAutores();
	}
	
	
}
