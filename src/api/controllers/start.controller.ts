import { Request, Response, NextFunction } from "express";
import { APIError } from "../errors/api-error";

export const index = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(200).json({
      message: "Server is live"
    });
  } catch (error) {
    throw new APIError(error?.message, error?.status);
  }
}