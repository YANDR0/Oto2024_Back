// I guess

class Triangulo {
    constructor() {
        console.log('🔺')
        this.nombre = 'Triangulo';
    }
}

class Circulo {
    constructor() {
        console.log("🔵 I guess we're doing circles now")
        this.nombre = 'Circulo';
    }
}

class Factory {
    static crear() {
        if(Math.floor(Math.random() * 20) == 1)
            return new Circulo;

        return new Triangulo
    }
}

setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
setTimeout(()=>{Factory.crear()}, 100)
