import * as yup from "yup";
import type { Request, Response, NextFunction } from "express";
import type IValidation from "~/middlewares/helpers/IValidation";
import type FactoryResponse from "~/helpers/FactoryResponse";

export default class CalculateAverageValidation implements IValidation {
  constructor(private readonly factoryResponse: FactoryResponse) {}

  async execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const schema = yup.object({
        numbers: yup
          .array()
          .required("O campo numbers é obrigatório")
          .of(
            yup
              .number()
              .integer("O campo numbers precisa ser inteiro")
              .min(1, "Os valores do array numbers precisam ser >= 1")
          )
          .min(1, "O array numbers precisa ter pelo menos uma posição")
          .max(1000, "O array numbers pode ter no máximo 1000 itens"),
      });

      await schema.validate(req.body, { abortEarly: false, strict: true });

      next()
    } catch (err: any) {
      this.factoryResponse.toJson(res, 422, 'Campos inválidos', err.errors);
    }
  }
}
