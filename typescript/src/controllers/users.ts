import { Request, Response } from "express";


class UsersController {
    findAll(req: Request, res: Response){
        res.send([]);
    }
}