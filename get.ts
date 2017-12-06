import { Request, Response, Next } from 'restify';
import { persons } from './data';

export function getAll(req: Request, res: Response, next: Next): void {
    res.send(persons);
    next();
}