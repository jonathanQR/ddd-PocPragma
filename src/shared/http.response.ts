import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  NO_VALID=400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  ALREADY_EXISTS=409,
  INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
  Ok(res: Response, data?: any): Response {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMsg: "Success",
      data: data,
    });
  }

  NotFound(res: Response, data?: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: "Not Found",
      error: data,
    });
  }

  Unauthorized(res: Response, data?: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: "Unauthorized",
      error: data,
    });
  }

  Forbidden(res: Response, data?: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: "Forbidden",
      error: data,
    });
  }

  Error(res: Response, data?: any): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: "Internal server error",
      error: data,
    });
  }
  noValid(res: Response, data?: any): Response {
    return res.status(HttpStatus.NO_VALID).json({
      status: HttpStatus.NO_VALID,
      statusMsg: "Invalid values",
      values: data,
    });
  }
  alreadyExist(res: Response, data?: any): Response {
    return res.status(HttpStatus.NO_VALID).json({
      status: HttpStatus.NO_VALID,
      statusMsg: "Document already registered",
      values: data,
    });
  }
}