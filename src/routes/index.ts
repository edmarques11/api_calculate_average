import { NextFunction, Router, type Request, type Response } from "express";
import CalculateAverageController from "~/controllers/numbers/CalculateAverageController";
import FactoryResponse from "~/helpers/FactoryResponse";
import CalculateAverageValidation from "~/middlewares/validation/numbers/CalculateAverageValidation";
import Numbers from "~/models/Numbers";

const router = Router();

// Helpers
const factoryResponse = new FactoryResponse();

// Models
const numbersModel = new Numbers();

// Controllers
const calculateAverageController = new CalculateAverageController(
  numbersModel,
  factoryResponse
);

// Validations
const calculateAverageValidation = new CalculateAverageValidation(
  factoryResponse
);

router.post(
  "/average",
  (req: Request, res: Response, next: NextFunction) => {
    calculateAverageValidation.execute(req, res, next);
  },
  (req: Request, res: Response) => {
    calculateAverageController.execute(req, res);
  }
);

router.get("/", (req: Request, res: Response) => {
  factoryResponse.toJson(res, 200, "App is online!");
});

router.all("*", (req: Request, res: Response) => {
  factoryResponse.toJson(res, 404, "Rota não encontrada");
});

export default router;
