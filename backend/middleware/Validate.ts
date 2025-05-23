import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

// Middleware de validation générique basé sur Zod
export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body); // On tente de valider les données envoyées dans le body

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: 'Validation échouée',
          errors: error.errors.map((err) => ({
            path: err.path,
            message: err.message,
          })),
        });
      } else {
        next(error);
      }
    }
  };
