// I guess

class Triangulo {
    constructor() {
        console.log('🔺')
        this.nombre = 'Triangulo';
    }
}

class Circulo {
    constructor() {
        console.log("🔵 I guees we're doing circles now")
        this.nombre = 'Circulo';
    }
}

class Factory {
    static crear() {
        if(Math.floor(Math.random() * 100 > 0))
            return new Triangulo;

        return new Circulo
    }
}

setTimeout(()=>{Factory.crear()}, 100)

/*
while(true){
    setTimeout(()=>{Fa}, 1)
}*/
