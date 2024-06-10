{{
    
    let cliente1 = {
    nombre: 'juan',
    edad: '30'
}
let cliente2 = {
    nombre: 'ana',
    edad: '21'
}
function saludar(cliente) {
    console.log(`Hola, soy ${cliente.nombre} y tengo ${cliente.edad} años`);
}
saludar(cliente1)
saludar(cliente2)

class Cliente {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad}`);
    }
}
const Cliente3 = new Cliente('juan', 33);
const Cliente4 = new Cliente('ana', 25);

Cliente3.saludar();
Cliente4.saludar();

class Cliente {
    constructor (nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mosrarSaldo(){
        console.log( `Hola ${this.nombre}, tu saldo es de: $${this.saldo}`);
    }
}

const Cliente1 = new Cliente('Juan', 3000);
const Cliente2 = new Cliente('Ernesto', 30225)

Cliente1.mosrarSaldo();
Cliente2.mosrarSaldo();
console.log(Cliente1.saldo, Cliente2.nombre);

}}

