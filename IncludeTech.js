function mostrarTag() {
    var minhaTag = document.getElementById("Informe");
    minhaTag.style.display = "block";
  
    var text = document.getElementById("txtComprimento")
  var Botao = document.getElementById("btnOla")
  var saida = document.getElementById("txtNome")
  
  var masc = document.getElementById("sexoMasc")
  var fem = document.getElementById("sexoFem")
  var out = document.getElementById("sexoOutros")
  
  if(sexoMasc.checked){
              saida.textContent = "Olá " + text.value + " seja bem vindo!";
      }
  
      if(sexoFem.checked){
              saida.textContent = "Olá " + text.value + " seja bem vinda!";
      }
  }
  
  
  function Travar(){
    alert("Pagina em construção!!");
  }
  
  
  
  
  

 