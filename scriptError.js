
//Algorito n programa que simule un cajero automático con las siguientes funciones:

//iniciarSesion(pin): Inicializa la sesión del cajero automático verificando el pin ingresado.
//consultarSaldo(): Muestra el saldo actual de la cuenta del usuario.
//depositar(monto): Deposita un monto en la cuenta del usuario.
//retirar(monto): Retira un monto de la cuenta del usuario, verificando que el monto sea menor o igual al saldo disponible 
//y que no exceda el límite diario de retiro.
//mostrarMenu(): Muestra un menú con las opciones disponibles para el usuario
//(consultar saldo, depositar, retirar, salir).


// Datos de la cuenta del usuario
const cuenta = {
    saldo: 10000,
    pinCorrecto: 1234,
    limiteRetiroDiario: 2000
  };

  
  let pinIngresado;
  // Función para iniciar sesión
  function iniciarSesion(pinIngresado) {
  do{
    pinIngresado = parseInt(prompt("Ingrese su PIN: "));
    if (pinIngresado === cuenta.pinCorrecto) {
      alert("Sesión iniciada correctamente.");
      return true; // Devuelve true para mostrar el menú. <---
    } else {
      alert("Error: PIN incorrecto. Inténtelo de nuevo.");
    }
  } while (true);
}
  
  // Función para consultar saldo
  function consultarSaldo() {
    alert(`Su saldo actual es de: $${cuenta.saldo}`);
  }
  
  // Función para depositar
  function depositar(monto) {
    if (monto <= 0) {
      alert("Error: El monto a depositar debe ser un valor positivo.");
    } else {
      cuenta.saldo += monto;
      alert(`Se ha depositado $${monto} correctamente. Su nuevo saldo es de: $${cuenta.saldo}`);
    }
  }
  
  // Función para retirar
  function retirar(monto) {
    if (monto <= 0) {
      alert("Error: El monto a retirar debe ser un valor positivo.");
      return; // No se realiza el retiro si el monto es inválido
    }
  
    if (monto > cuenta.saldo) {
      alert("Error: El monto a retirar excede su saldo disponible.");
      return; // No se realiza el retiro si el monto supera el saldo
    }
  
    if (monto > cuenta.limiteRetiroDiario) {
      alert("Error: El monto a retirar excede el límite diario de retiro.");
      return; // No se realiza el retiro si el monto supera el límite diario
    }
  
    cuenta.saldo -= monto;
    alert(`Se ha retirado $${monto} correctamente. Su nuevo saldo es de: $${cuenta.saldo}`);
  }
  
  // Función para mostrar el menú
  let opcion;
  function mostrarMenu() {
    do{  
    opcion  = parseInt(prompt("Ingrese una opción \n1. Consultar saldo \n2. Depositar \n3. Retirar \n4. Salir: ")); 
    switch (opcion) {
      case 1:
        consultarSaldo();
        break;
      case 2:
        let montoDepositar = parseFloat(prompt("Ingrese el monto a depositar: $"));
        depositar(montoDepositar);
        break;
      case 3:
        let montoRetirar = parseFloat(prompt("Ingrese el monto a retirar: $"));
        retirar(montoRetirar);
        break;
      case 4:
        alert("Saliendo del cajero automático...");
        return false;
      default:
        alert("Opción inválida. Inténtelo de nuevo.");
    }
      } while (opcion !== 4)
    return true;
  }

  
  // Iniciar sesión y mostrar el menú principal

 if (iniciarSesion(pinIngresado)){
  mostrarMenu();
  }