// types.d.ts
import * as express from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                email: string;
                idSession?: number
                idUser: number;
                origin: TGOrigin,
                token: string;
            },
        }
    }
}