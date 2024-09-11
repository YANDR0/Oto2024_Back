import { Request, Response, NextFunction } from "express";
import { User } from "../types/user";

const secretKey = '12345'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const key = req.query.key;
    if(key === secretKey){
        const user: User = {
            id: '1',
            name: 'John Doe'
        }
        req.user = user;
        return next();  
    }
    
    res.sendStatus(401);
}