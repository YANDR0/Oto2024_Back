

//Funciones como variables, ambas son lo mismo

const sumar = function(a,b){
    return a + b;
}

const sumar2 = (a,b) => a + b;


//Función que guarda otra función o devuelve otra
const sumar3 = (a) => (b) => a + b;

function sum (a){
    return function(b){
        return a + b
    }
};


xd2 = sumar3(1)(2)
xd = sum(1)(2)
console.log(xd2)
console.log(xd)


//Recordar que hace call apply y bind