
// Singletons

class Singleton {
    constructor(value) {
        if(Singleton.instance) {
            return Singleton.instance;
        }

        this.value = value;
        Singleton.instance = this;
        return this;
    }
}

/*const obj1 = new Singleton('objeto 1')
console.log(obj1.value)

const obj2 = new Singleton('objeto 2')
console.log(obj2.value)*/


// Factory
// Los estáticos te permiten acceder a metodos sin crear el objeto

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

class Factory {
    static instancias = []
    static crearPersona(nombre) {
        const ins = new Persona(nombre);
        Factory.instancias.push(ins);
        return ins;
    }
}



// Proxy

class PersonaProxy {
    constructor(p) {
        this.p = p
    }

    auth() {
        this.autenticado = true;
    }

    saludar(){
        if(this.autenticado){
            return this.p.saludar()
        } else {
            console.log('No autenticado')
            return
        }
    }
}

const p1 = new Persona('Juan')
const p2 = new Persona('Pedro')




