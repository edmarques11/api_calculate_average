import type { Response } from "express";

export default class FactoryResponse {
  toJson(res: Response, code = 200, message = "ok", data = {}): Response {
    return res.status(code).json({ code, message, data });
  }
}
