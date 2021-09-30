
// Saudação para o usuário ao acessa à página.

function bemvindo(){

    alert("Seja bem-vindo ao meu portfólio");

}

//Alterar a fonte para maiúscula

function maiuscula (texto){
    
    texto.value = texto.value.toUpperCase();
}

/* Validar formulário -  Verificar se os campos do formulário foram preenchidos */

function validarNome(){

    //localizar o elemento, chamar a propriedade style e modificar a cor da borda e a cor de fundo. 
    document.formulario.name.style.borderColor = "#FFFFFF";
    document.formulario.name.style.backgroundColor = "#FFFFFF";
    
    if(document.formulario.name.value == "" || document.formulario.name.value.length < 4 ){
        alert("Informe pelo menos 4 letras!");        
        document.formulario.name.style.borderColor = "#FF4500";
        document.formulario.name.style.backgroundColor = "#FFFFE0";
        document.formulario.name.value = "";
        //document.formulario.name.focus();
        return false;
    } 
  
    return true;    
}

// Validar e-mail. (expRegistro: expressão que valida e-mail.)

function validarEmail(){
    
    document.formulario.email.style.borderColor = "#FFFFFF";
    document.formulario.email.style.backgroundColor = "#FFFFFF";
    
    var expRegistro =  /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
    
    if(document.formulario.email.value == "" || !document.formulario.email.value.match(expRegistro)){
        alert("Preencha o campo SEU E-MAIL corretamente")
        document.formulario.email.style.borderColor = "#FF4500";
        document.formulario.email.style.backgroundColor = "##FFFFE0";
        document.formulario.email.value = "";
        //document.formulario.e-mail.focus();

        return false;
    }    
     
}



