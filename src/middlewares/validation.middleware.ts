import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationChain } from "express-validator";
import { AppError } from "./error.middleware";

export const validate = (validations: ValidationChain[]) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    // Execute all validations
    await Promise.all(validations.map((validation) => validation.run(req)));

    // Check for validation errors
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // If there are validation errors
    const extractedErrors: { [key: string]: string } = {};
    errors.array().forEach((err) => {
      if (err.type === "field" && err.path) {
        extractedErrors[err.path] = err.msg;
      }
    });

    const error = new Error("Validation failed") as AppError;
    error.statusCode = 400;
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: extractedErrors,
    });
  };
};
