package br.com.planetburguer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.planetburguer.model.Cliente;
import br.com.planetburguer.service.ClientesService;

@CrossOrigin(origins = "*")
@RestController

public class ClienteController {

	@Autowired
	ClientesService clienteService;

	@RequestMapping(value = "/cliente/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> excluirCliente(@PathVariable Long id) {
		clienteService.excluir(id);
		return new ResponseEntity<String>("Sucesso", HttpStatus.OK);
	}

	@RequestMapping(value = "/cliente", method = RequestMethod.GET)
	public ResponseEntity<List<Cliente>> obterCliente() {

		List<Cliente> c1 = clienteService.obter();
		return new ResponseEntity<List<Cliente>>(c1, HttpStatus.OK);
	}

	@RequestMapping(value = "/cliente", method = RequestMethod.POST)
	public ResponseEntity<Cliente> cadastrarCliente(@RequestBody Cliente cliente) {

		Cliente clienteCadastrado = clienteService.cadastrar(cliente);

		return new ResponseEntity<Cliente>(clienteCadastrado, HttpStatus.CREATED);

	}

	@RequestMapping(value = "/cliente", method = RequestMethod.PUT)
	public ResponseEntity<Cliente> atualizarCliente(@RequestBody Cliente cliente) {
		Cliente c = clienteService.atualizar(cliente);
		return new ResponseEntity<Cliente>(c, HttpStatus.OK);
	}

}
