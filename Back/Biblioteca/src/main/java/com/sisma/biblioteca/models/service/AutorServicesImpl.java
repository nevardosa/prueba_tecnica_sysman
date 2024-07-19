package com.sisma.biblioteca.models.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sisma.biblioteca.models.entity.Autor;
import com.sisma.biblioteca.models.repository.IAutorRepository;

@Service
public class AutorServicesImpl implements IAutorService{

	
	@Autowired
	private IAutorRepository autorRepository;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<Autor> ListAutores() {
		return (List<Autor>) autorRepository.findAll();
	}
	

}
