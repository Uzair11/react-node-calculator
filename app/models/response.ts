export interface ResponseModel {
  code: number;
  message: string;
  data?: {
    sum: number;
  };
}
