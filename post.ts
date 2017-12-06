import { CREATED } from 'http-status-codes';
import { Next, Request, Response } from 'restify';
import { BadRequestError } from 'restify-errors';
import { persons, IPerson } from './data';

export function post(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
    next(new BadRequestError('Missing mandatory member(s)'));
  } else {
    const newCustomerId = parseInt(req.body.id);
    if (!newCustomerId) {
      next(new BadRequestError('ID has to be a numeric value'));
    } else {
      const newCustomer: IPerson = {
        id: newCustomerId,
        firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email
      };
      persons.push(newCustomer);
      res.send(CREATED, newCustomer);
    }
  }
} 2