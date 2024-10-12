import IControllerInterface from "~/controllers/helpers/IControllerInterface";
import type { Request, Response } from "express";
import type Numbers from "~/models/Numbers";
import type FactoryResponse from "~/helpers/FactoryResponse";

export default class CalculateAverageController
  implements IControllerInterface
{
  constructor(
    private readonly numbersModel: Numbers,
    private readonly factoryResponse: FactoryResponse
  ) {}

  execute(req: Request, res: Response): Response {
    try {
      const { numbers } = req.body;

      const average = this.numbersModel.average(numbers as number[]);

      return this.factoryResponse.toJson(res, 200, "ok", { average });
    } catch (err: any) {
      return this.factoryResponse.toJson(res, 500, 'Internal server error', err)
    }
  }
}
