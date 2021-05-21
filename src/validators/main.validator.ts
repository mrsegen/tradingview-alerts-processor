import { ClassType, transformAndValidate } from 'class-transformer-validator';
import { Request, Response, NextFunction } from 'express';

export const validateClass = async (
  req: Request,
  res: Response,
  next: NextFunction,
  classType: ClassType<any>
): Promise<void> => {
  try {
    await transformAndValidate(classType, req.body, {
      validator: { enableDebugMessages: false, forbidUnknownValues: true }
    });
    next();
  } catch (err) {
    res.writeHead(400);
    res.write(
      JSON.stringify({
        message: 'Validation error',
        constraints: Object.values(err[0].constraints)
      })
    );
    res.end();
  }
};