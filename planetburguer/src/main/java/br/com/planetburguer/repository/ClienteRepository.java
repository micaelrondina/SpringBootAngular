package br.com.planetburguer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.planetburguer.model.Cliente;

@Repository
public interface ClienteRepository  extends JpaRepository<Cliente, Long>{
	
	
	

}
