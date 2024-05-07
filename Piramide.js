const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimirPiramideAltura(altura) {
  for (let i = 1; i <= altura; i++) {
    let linea = '';
    for (let j = 1; j <= altura - i; j++) {
      linea += ' '; // Agrega espacios para alinear la pirámide
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      linea += '*'; // Agrega asteriscos
    }
    console.log(linea);
  }
}

// Solicitar altura al usuario
rl.question("Ingrese la altura de la pirámide:", (altura) => {
  // Verificar si la entrada es un número válido
  altura = parseInt(altura);
  if (!isNaN(altura) && altura > 0) {
    imprimirPiramideAltura(altura);
    rl.close();
  } else {
    console.log("Por favor, ingrese un número entero positivo.");
    rl.close();
  }
});
