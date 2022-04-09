//-------------------------Ejercicio 2-------------------------------------------------------------------------
//1. Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.

let letra = prompt ("ingresa la primera letra")
let letra2 = prompt ("ingresa la seguna letra")

function ordenAlfabeto (a, b){
    if (a > b){
        console.log("la letra es menor que a")
} else {
    console.log("la letra es mayor que a")
}
}

// 2. Pedir 2 datos por prompt:
// - Si a > b dividir a entre b
// - Si a < b sumar a más b
// - si a == b multiplicar ambos numeros
// Imprimir el resultado en consola

let numero = prompt ("ingresa numero")
let numero1 = prompt ("ingresa numero")

numero=Number(numero);
numero1=Number(numero1);

function operacion (a, b){
    if (a > b){
        console.log("resultado", a / b)
} else if (a < b) {
    console.log("resultado", a+b)
} else if (a == b){
    console.log(a*b)} else{
        console.log(error);
    }
}
operacion(numero, numero1)


// 3. Pedir al usuario por prompt un numero entre 1 y 100
//  - Verificar si es un par o impar e imprimir en resultado en consola
let numero3 = prompt ("ingresa numero 1 al 100")

numero3=Number(numero3);

function parImpar (a){
    if (a % 2 == 0){
        console.log("el resultado es par") }
            else {
                console.log("es impar");
            }
        }
parImpar(numero3)


// 4- Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):

//  - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

let name = prompt ("nombre");
let peso = prompt ("peso en Kg");
let ms = 9.81
let mtsS = 1.622

function kilogramos (a,b,c){
    if (a / b*c ){
        console.log("tu peso actual en la luna es", a / b*c);
    }
}

kilogramos (peso, ms, mtsS)