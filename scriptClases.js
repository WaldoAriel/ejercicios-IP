// Crear un objeto literal Cliente
let cliente1 = {
    nombre: "Juan",
    edad: 30
  };
  // Definir la función saludar fuera del objeto
function saludar(cliente) {
    console.log(`Hola, soy ${cliente.nombre} y tengo ${cliente.edad} años.`);
  }
  // Llamar a la función saludar y pasar el objeto cliente1 como argumento
  saludar(cliente1); // Salida: Hola, soy María y tengo 25 años.