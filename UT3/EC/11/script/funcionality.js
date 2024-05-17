// Output
//TODO Captura referencia a elemento "DisplayInf" con "getElementById"
const display =  document.getElementById("displayInf")

//TODO Captura referencia a elemento "displaySup" con "querySelector"

const displaySup = document.getElementById("displaySup")

// Numeros
//TODO Captura referencia a elementos 'boton' con "querySelector"

const botonesNumeros = document.querySelectorAll(".boton")

// Operaciones
//TODO Captura referencia a elemento "equal" con "getElementById"

const botonequal = document.getElementById("equal")

//TODO Captura referencia a elemento "operaciones" con "getElementsByClassName"

const botonesOperaciones = document.getElementsByClassName("operaciones")

// Limpiar
//TODO Captura referencia a elemento "clear" con "getElementById"

const botonClear = document.getElementById("clear")

// Variables para operaciones
let operacion = '', equalParaDisplaySup = '='
let operandoUno = 0, operandoDos = 0, resultado = 0


// Listeners
//botonEqual y botonClean es un elemento, no una colección, por lo que no es necesario convertirlo a un array

botonequal.addEventListener('click',procesarClickOperacion)
botonClear.addEventListener('click',limpiarContenido)
botonesNumeros[0].addEventListener('click',procesarClickNumero)



//TODO: Enlaza el evento click a la función procesarClickOperacion àra el botonEqual, y limpiarContenido para el botonClear



// Capturador botones numeros
let arrNums =Array.from(botonesNumeros)
Array.from(botonesNumeros).forEach(htmlelement => {
    //TODO Agregar evento click a cada boton de número, y llamar a la función procesarClickNumero
    ClipboardItem.addEventListener('click',procesarClickNumero)
});

// Capturador botones operaciones
let arrOpers =Array.
Array.from(botonesOperaciones).forEach(htmlelement => {
     //TODO Agregar evento click a cada boton de operaciones y llamar a la función procesarClickOperacion
});



// Procesar eventos
function procesarClickNumero(event) {
    //Obtener el número del botón clickeado
    let numeroClickado = event.target.innerHTML
    if(operacion==='') {
        if(operandoUno===0)
            operandoUno = ''

        operandoUno += numeroClickado
        imprimirEnDisplay(operandoUno)
    } else if (operacion.length>0) {
        if(operandoDos===0)
            operandoDos=''

        operandoDos+=numeroClickado
        imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, '')
        imprimirEnDisplay(operandoDos)
    }
}


// Procesador de operaciones aritmeticas
function procesarClickOperacion(event) {
    let operacionClickada = event.target.textContent
    equalParaDisplaySup = '='

    if (operacionClickada==="=") {
        switch (operacion) {
            case '+':
                //TODO: Llama a la función suma con operandoUno y operandoDos y asigna el resultado a la variable resultado
                suma[ope]
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break

            case '-':
                //TODO: Llama a la función resta y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break

            case 'x':
                //TODO: Llama a la función multiplicacion y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break

            case '/':
                //TODO: Llama a la función division y asigna el resultado a la variable resultado
                imprimirEnDisplaySuperior(operandoUno, operacion, operandoDos, resultado)
                break
        }
        operandoUno = parseInt(resultado)
        operacion = ''
        operandoDos = 0
        //TODO: Llama a la función imprimirEnDisplay y pasa como argumento el resultado

    } else {
        operacion = operacionClickada
    }
}


// Operaciones aritmeticas
function suma(numeroUno, numeroDos) {
    return parseFloat(numeroUno) + parseFloat(numeroDos)
}

function resta(numeroUno, numeroDos) {
    return parseFloat(numeroUno) - parseFloat(numeroDos)
}

function multiplicacion(numeroUno, numeroDos) {
    return parseFloat(numeroUno) * parseFloat(numeroDos)
}

function division(numeroUno, numeroDos) {
    return parseFloat(numeroUno) / parseFloat(numeroDos)
}


// Mostrar display inferior
function imprimirEnDisplay(valor) {
    //Mostrar el valor en el display inferior
    display.innerText=valor
}


// Mostrar display superior
function imprimirEnDisplaySuperior(valorUno, operacion, valorDos, resultado) {
    //Desconmenta la siguiente linea para mostrar el contenido en el display superior, y rellena lo que falta
    // valorUno + operacion + valorDos + equalParaDisplaySup + resultado

}


// Clear display
function limpiarContenido() {
    operandoUno=0
    operandoDos=0
    operacion=''
    resultado=0
    equalParaDisplaySup = ''
    imprimirEnDisplay(0)
    imprimirEnDisplaySuperior(0, '', '', '')
}