package com.sisma.biblioteca.models.service;

import java.util.List;

import com.sisma.biblioteca.models.entity.Libro;

public interface ILibroService {
	
	public Libro crearLibro(Libro libro);
	
	public List<Libro> ListaLibros();
	
	public Libro buscarLibro(Integer idLibro);
			
	public Libro actualizarLibro(Libro idLibro);
	
	public void eliminarLibro(Integer idLibro);
}
