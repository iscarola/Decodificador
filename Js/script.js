var items = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  
  function Codificar(texto) {
     items.forEach((element) => {
       let textoProcurar = element[0];
       let textoSubstituir = element[1];
       texto = texto.replaceAll(textoProcurar, textoSubstituir);
     });
     return texto;
   }
  
   function Decodificar(texto) {
     items.forEach((element) => {
       let textoProcurar = element[1];
       let textoSubstituir = element[0]; 
       texto = texto.replaceAll(textoProcurar, textoSubstituir);
     });
   
     return texto;
   }
  
   //botao de encriptar
   
   
   document.getElementById("criptografe").addEventListener("click", function () {
     let textoCodificado = document.getElementById("input-entrada").value;
     if (!entradaValida(textoCodificado)) {
       return;
     }
     let textoDecodificado = Codificar(textoCodificado);
     document.getElementById("msg").value = textoDecodificado;
   });
  
  
  
   
   //Desencrip
   
  
   document.getElementById("descriptografe").addEventListener("click", function () {
     let textoNormal = document.getElementById("input-entrada").value;
     if (!entradaValida(textoNormal)) {
       return;
     }
     let textoDecodificado = Decodificar(textoNormal);
     document.getElementById("msg").value = textoDecodificado;
  
  });
  
  function entradaValida(texto) {
     if (texto === "") {
       alert("Digite um texto!");
       return false;
     }
     if (texto.toLowerCase() != texto) {
       alert("Deve usar apenas letras minusculas!");
       return false;
     }
     const caracteresAcentos = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
     var arrayCaracteresAcentos = caracteresAcentos.split("");
   
     arrayCaracteresAcentos.forEach(function (caractere) {
       if (texto.includes(caractere)) {
         alert("Não pode utilizar acentos!");
         return false;
       } 
     }); 
     return true;
   } 
  
  
  
  
  