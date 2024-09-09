import express, {Request, Response} from 'express';

const app = express()

const port = process.env.PORT || 3001

app.get('', (req:Request, res:Response) => {
    res.send('Api Works!')
})

app.listen(port, () => {
    console.log(`App is running in port ${port}`)
})



/*
  Error por tipo de dato
let nombre:string = 'Juan'
nombre = 5


class Persona{
    nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }
}

const yo = new Persona('Juan');
console.log(yo.nombre)
*/