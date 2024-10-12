import type { Request, Response } from "express";

export default interface IControllerInterface {
  execute(req: Request, res: Response): Response;
}
