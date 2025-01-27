// Solicitar tres números al usuario
let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));
let num3 = Number(prompt("Introduce el tercer número:"));

// Verificar si los tres números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", num1, num2, num3);
} else {
    // Crear un array con los números
    let numeros = [num1, num2, num3];

    // Ordenar el array de menor a mayor
    numeros.sort((a, b) => a - b);

    // Imprimir los números de menor a mayor
    console.log("Números de menor a mayor:", numeros);

    // Imprimir los números de mayor a menor
    console.log("Números de mayor a menor:", numeros.slice().reverse());
}