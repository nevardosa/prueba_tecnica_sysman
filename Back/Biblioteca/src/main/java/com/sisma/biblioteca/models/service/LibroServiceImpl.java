package com.sisma.biblioteca.models.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sisma.biblioteca.models.entity.Libro;
import com.sisma.biblioteca.models.repository.ILibroRepository;

@Service
public class LibroServiceImpl implements ILibroService {
	
	@Autowired
	private ILibroRepository libroRepository;

	@Override
	@Transactional
	public Libro crearLibro(Libro libro) {
		return libroRepository.save(libro);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Libro> ListaLibros() {
		return (List<Libro>) libroRepository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Libro buscarLibro(Integer idLibro) {
		return libroRepository.findById(idLibro).orElse(null);
	}

	@Override
	@Transactional
	public Libro actualizarLibro(Libro libro) {
		return libroRepository.save(libro);
	}

	@Override
	@Transactional
	public void eliminarLibro(Integer idLibro) {
		libroRepository.deleteById(idLibro);
		
	}

}
