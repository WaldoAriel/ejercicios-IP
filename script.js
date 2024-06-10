{{
//EJERCICIO 1
    let persona = {
    nombre : 'Juancito',
    edad : 30,
    ciudad : 'París'
}

//EJERCICIO 2

    let persona2 = {}
    persona2.nombre = 'Juanita';
    persona2.edad = 28;
    persona2.ciudad = 'Venecia'
    persona2.ocupacion = 'Fotógrafa'
    
        
    console.log(persona2);

    persona2.hobbie = ['tenis', 'natación', 'ajedréz'];
    persona2.deporteFavorito = "fútbol"
    console.log(persona2);

    
persona.edad +=1;
console.log(persona.edad);

//EJERCICIO 3
let productos = [];
    productos.unshift({nombre : "zapatillas", precio : 150, stock : 500});
    productos.unshift({nombre : "campera", precio : 180, stock : 100});
    productos.unshift({nombre : "jean", precio : 750, stock : 60});

    console.log(productos[0]);
    console.log(productos[2]);

    productos.push({nombre : 'ojotas' , precio : 50 , stock : 500});
    productos.unshift({nombre : 'cintos', precio : 100, stock : 300});
    productos.shift();
    productos.pop();
    

    console.log(productos[2]);


}}