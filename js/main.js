
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

let operaciona;
let operacionb;
let operacionfinal;

// Botones | acciones

btnCero.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "0";
   txtResultado.textContent = txtResultado.textContent + "0";
    
    });

btn1.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "1";
    txtResultado.value = txtResultado.value + "1";
   
});

btn2.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "2";
    txtResultado.value = txtResultado.value + "2";
});

btn3.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "3";
    txtResultado.value = txtResultado.value + "3";
});

btn4.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "4";
    txtResultado.value = txtResultado.value + "4";
});

btn5.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "5";
    txtResultado.value = txtResultado.value + "5";
});

btn6.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "6";
    txtResultado.value = txtResultado.value + "6";
});

btn7.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "7";
    txtResultado.value = txtResultado.value + "7";
});

btn8.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "8";
    txtResultado.value = txtResultado.value + "8";
});

btn9.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "9";
    txtResultado.value = txtResultado.value += "9";
});


// Botones operaciones 

btnSuma.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "+";
    operaciona = txtResultado.value;
    operacionfinal = "+";
});



    

btnResta.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "-";
    operaciona = txtResultado.value;
    operacionfinal = "-";
});

btnDivide.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "/";
    operaciona = txtResultado.value;
    operacionfinal = "/";
});

btnMultiplica.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "*";
    operaciona = txtResultado.value;
    operacionfinal = "*";
});

btnIgual.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += "=";
    operacionb = txtResultado.value;
    resolver ();
    
});
btnPunto.addEventListener("click", function(event){
    event.preventDefault();
    lblDatos.value += ".";
    operaciona = txtResultado.value;
    operacionfinal = ".";
});
btnBorrar.addEventListener("click", function(event){
    event.preventDefault();
    txtResultado.value = "";
    lblDatos.value = "";
});

function resolver(){
    let res = 0;
    switch(operacionfinal){
      case "+":
        res = parseFloat(operaciona) + parseFloat(operacionb);
        break;
      case "-":
          res = parseFloat(operaciona) - parseFloat(operacionb);
          break;
      case "*":
        res = parseFloat(operaciona) * parseFloat(operacionb);
        break;
      case "/":
        res = parseFloat(operaciona) / parseFloat(operacionb);
        break;
    }
    txtResultado.value = res;
  }




