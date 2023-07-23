
// Botones(variables)

let btnCero = document.getElementById("btnCero");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplica = document.getElementById("btnMultiplica");
let btnDivide = document.getElementById("btnDivide");
let btnBorrar = document.getElementById("btnBorrar");

let txtResultado = document.getElementById("txtResultado");
let lblDatos = document.getElementById("lblDatos");
// Operaciones variables

let uno = "1";
let dos = "2";

// Botones | acciones

btnCero.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "0";
    txtResultado.value += "0";
    
    });

btn1.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "1";
});

btn2.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "2";
});

btn3.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "3";
});

btn4.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "4";
});

btn5.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "5";
});

btn6.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "6";
});

btn7.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "7";
});

btn8.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "8";
});

btn9.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "9";
});



btnSuma.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "+";
});


    

btnResta.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "-";
});

btnDivide.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "/";
});

btnMultiplica.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "*";
});

btnIgual.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "=";
});
btnPunto.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += ".";
});
btnBorrar.addEventListener("click", function(event){
    event.preventDefault();
    txtResultado.value = "";
    lblDatos.value = "";
});





