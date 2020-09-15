function getNome(){
    var objInputNome = document.getElementById('txtNome');
    var strNome = objInputNome.value;
    var objDisplay = document.getElementById('display');
    objDisplay.innerText = strNome;
 }  

 
 function adicionarContato(){

     var nomeContato = document.getElementById('txtNome').value;
     console.log(nomeContato);
     var elementoContato = document.getElementById('listaContatos');
     var inputLista = document.createElement('input');
     var labelList = document.createElement('label');
     var br = document.createElement('br'); 
     var btnRemover = document.createElement('input');
     btnRemover.setAttribute("type", "button"); 
     btnRemover.setAttribute("value", "Remover");
     //btnRemover.setAttribute("onclick", "removerContato()");   
     var linha = document.createElement('div');

     btnRemover.onclick=function(){
         elementoContato.removeChild(linha);
     };

    
     linha.appendChild(labelList).innerText = "Contato: ";
     linha.appendChild(inputLista).innerText = nomeContato;
     linha.appendChild(btnRemover);
     linha.appendChild(br);
     elementoContato.appendChild(linha);
 }

 function removerTudo(){
     var listaContatos = document.getElementById('listaContatos')
     listaContatos.remove();
 }
 




