package com.sisma.biblioteca.models.repository;

import org.springframework.data.repository.CrudRepository;

import com.sisma.biblioteca.models.entity.Libro;

public interface ILibroRepository extends CrudRepository<Libro, Integer> {

}
