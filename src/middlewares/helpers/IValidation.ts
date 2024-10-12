import type { Request, Response, NextFunction } from "express";

export default interface IValidation {
  execute(req: Request, res: Response, next: NextFunction): Promise<void>;
}
