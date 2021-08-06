
/* This module is responsible for formatting all our outbound response */

export const message = (message: String, result: any, statusCode: boolean) => {
  return {
    message: message,
    result: result,
    statusCode: statusCode,
  };
};
