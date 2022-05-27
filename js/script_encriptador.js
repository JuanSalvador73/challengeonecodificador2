var buttonEncriptar = document.querySelector("#btn-encriptar");//Button Encriptar

var buttonDesencriptar = document.querySelector("#btn-desencriptar");//BTN Desencriptar

var datosEncriptar = document.querySelector("#contenedor-texto");//Div Contenedor
3
var imagenBusqueda = document.querySelector("#mensaje-busqueda"); //Div Mensaje Robot
//Datos del BTN que copia Datos
var buttonCopiar = document.querySelector("#btn-copiar");//Button Copiar
var campoText = document.querySelector("#campotexto");//Input de Campo Texto


//-------------------------Función Encriptar
buttonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-traductor");//Seleccionamos el form ***
    
    var textoCripto = form.campotexto.value;//Tomamos el valor del input text
    
    var errorP = document.querySelector("#error-parrafo");
    
    var errorStr = "";
    
    var isNumber;
    var isUpper;
    var isLower;
    var specialChar;
    var empty = "";
    
    //**************++Entran Funciones
    
    
    CheckString(textoCripto);
    ValidarTexto(textoCripto);
    
    form.reset(); //***
    
});


//-------------------------Adjuntamos función al Button Copiar

buttonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-traductor"); //***
    
    textoCripto = datosEncriptar.textContent;
    form.campotexto.value = textoCripto;

    console.log("El dato copiado es: ", campoText);

});


//-------------------------Adjuntamos función al Button Desencriptar

buttonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    var empty = "";
    
    var form = document.querySelector("#form-traductor");//Seleccionamos el form
    
    var textoCripto = form.campotexto.value;//Tomamos el valor del input text
    
    var chars = {"ai": "a", "enter":"e", "imes":"i", "ober": "o", "ufat": "u"};
    
    textoCripto = textoCripto.replace(/ai|enter|imes|ober|ufat/g, function(m){ return chars[m];});
    
    datosEncriptar.textContent = textoCripto;//Damos el valor del input al campo copia
    console.log(datosEncriptar.textContent);
    
    campoText.setAttribute("value", empty);
    
    form.reset();

});


//***********************+++++FUNCIONES DE STRING


//-----------------Checamos String

function CheckString(textoCripto){
        var errorP = document.querySelector("#error-parrafo");
        var errorStr = "El campo no puede estar vacío";

    if(textoCripto.length == 0){
        errorP.textContent = errorStr;
        console.log("El campo no puede ir vacío");
    }
}


//-----------------Validamos String

    function ValidarTexto(textoCripto) {
        if (!/^[a-z\s]+$/.test(textoCripto)) {
            var errorP = document.querySelector("#error-parrafo");
            var errorStr = "Sólo se permiten minúsculas";
            errorP.textContent = errorStr;
            console.log("hay caracteres especiales");
            
        return false;
        }
        Encriptar(textoCripto);
        console.log("Solo hay minúsculas");
        return true;
    }


//-----------------Funcion Encriptar

function Encriptar(textoCripto){
    
        imagenBusqueda.display ="none";
  
        var chars = {"a": "ai", "e":"enter", "i":"imes", "o": "ober", "u": "ufat"};
    
        textoCripto = textoCripto/*toString()*/.replace(/[aeiou]/g, function(m){ return chars[m];});

        datosEncriptar.textContent = textoCripto;//Damos el valor del input al campo copia
            var errorP = document.querySelector("#error-parrafo");
            var errorStr = "";
            errorP.textContent = errorStr;
        console.log(datosEncriptar.textContent);
        console.log("texto positivo");
}
