import { Request, Response, NextFunction } from "express";
import { APIError } from "../errors/api-error";
import { StartService } from "../services/start.service";

export const index = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(200).json({
      message: StartService.getStartMessage()
    });
  } catch (error) {
    throw new APIError(error?.message, error?.status);
  }
}