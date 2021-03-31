import { ResponseModel } from "../models/response";

function prepareResponseObject(
  code: number,
  message: string,
  data?: { sum: number }
): ResponseModel {
  let response: ResponseModel = {
    code,
    message,
  };

  if (data) {
    response = {
      ...response,
      data,
    };
  }

  return response;
}

export default prepareResponseObject;
