import { Request, Response } from "express";

class PeluchesController {
    getAll(req: Request, res: Response) {
        res.send('Peluches get all works')
    }
}

const peluchesController = new PeluchesController()
export default peluchesController;