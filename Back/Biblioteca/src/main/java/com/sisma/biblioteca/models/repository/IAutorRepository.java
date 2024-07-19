package com.sisma.biblioteca.models.repository;

import org.springframework.data.repository.CrudRepository;

import com.sisma.biblioteca.models.entity.Autor;

public interface IAutorRepository extends CrudRepository<Autor, Integer> {

}
