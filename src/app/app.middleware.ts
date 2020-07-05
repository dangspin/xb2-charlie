import { Request, Response, NextFunction, response } from 'express';
import { request } from 'http';

/**
 * 输出请求地址
 */

export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(request.url);
  next();
};

/**
 * 默认异常处理器
 */
export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error.message) {
    console.log('🚧', error.message);
  }

  let statusCode: number, message: string;

  /**
   * 处理异常
   */
  switch (error.message) {
    default:
      statusCode = 500;
      message = '服务暂时吃了点问题 ～～ 🌲';
      break;
  }

  response.status(statusCode).send({ message });
};
