package br.com.planetburguer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.planetburguer.model.Cliente;
import br.com.planetburguer.repository.ClienteRepository;

@Service
public class ClientesService {
	
	
	
	@Autowired
	private ClienteRepository clienteRepository;

	public Cliente cadastrar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	public List<Cliente> obter() {
		return clienteRepository.findAll();
	}

	public Cliente atualizar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	public void excluir(Long id) {
		clienteRepository.deleteById(id);
	}

}
