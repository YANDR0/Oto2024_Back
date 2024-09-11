export interface User {
    id?: string;
    name: string;
    email?: string;
    password?: string;
    
}

declare namespace Express {
    export interface Request{
        user?: User
    }
}