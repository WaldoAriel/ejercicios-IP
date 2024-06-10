{{
    
console.log('=============EJERCICIO 1====================');

class Cliente{
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad;
    }
} 
let cliente1 = new Cliente('Waldo', 47);

function saludarCliente(){
    console.log(`Hola! mi nombre es ${cliente1.nombre} y tengo ${cliente1.edad} años.`);
}
saludarCliente();

console.log('============================================');

console.log('=============EJERCICIO 2====================');

class Libro{
    constructor(titulo, autor){
        this.titulo = titulo,
        this.autor = autor;
    }
}
const Libro1 = new Libro('Crónicas Marcianas', 'Ray Bradbury');

function mostrarInfo(){
    console.log(`El libro solicitado es ${Libro1.titulo} y su autor es ${Libro1.autor}`);
}
mostrarInfo()

console.log('============================================');

console.log('=============EJERCICIO 3====================');

class Banco{
    constructor(nombreBanco, clientes){
        this.nombreBanco = nombreBanco,
        this.clientes = cliente1;
    }
    agregarCliente(){
        clientes.push
    }
}
let Banco1 = new Banco('Bancor', cliente1)

console.log(Banco1);
console.log('============================================');

}}

