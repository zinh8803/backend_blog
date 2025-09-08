import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";
import { sendResponse } from "../utils/response.util";
import { STATUS_CODES, ERROR_MESSAGES } from "../constants/api.constants";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    sendResponse(res, STATUS_CODES.OK, true, undefined, users);
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      sendResponse(
        res,
        STATUS_CODES.NOT_FOUND,
        false,
        ERROR_MESSAGES.NOT_FOUND
      );
      return;
    }
    sendResponse(res, STATUS_CODES.OK, true, undefined, user);
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    sendResponse(res, STATUS_CODES.CREATED, true, undefined, user);
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      sendResponse(
        res,
        STATUS_CODES.NOT_FOUND,
        false,
        ERROR_MESSAGES.NOT_FOUND
      );
      return;
    }
    sendResponse(res, STATUS_CODES.OK, true, undefined, user);
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await userService.deleteUser(req.params.id);
    if (!result) {
      sendResponse(
        res,
        STATUS_CODES.NOT_FOUND,
        false,
        ERROR_MESSAGES.NOT_FOUND
      );
      return;
    }
    sendResponse(res, STATUS_CODES.NO_CONTENT, true);
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.registerUser(req.body);
    sendResponse(res, STATUS_CODES.CREATED, true, undefined, user);
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    if (!result) {
      sendResponse(
        res,
        STATUS_CODES.UNAUTHORIZED,
        false,
        "Email hoặc mật khẩu không đúng"
      );
      return;
    }
    sendResponse(res, STATUS_CODES.OK, true, undefined, {
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    sendResponse(
      res,
      STATUS_CODES.INTERNAL_SERVER,
      false,
      ERROR_MESSAGES.SERVER_ERROR
    );
  }
};
