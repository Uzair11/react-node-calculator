import { QueryClient } from "react-query";

export type CalculatorFormProps = {
  queryClient: QueryClient;
};

export type Sum = {
  sum: number;
};

export type SumAPIResponse = {
  code: number;
  message: string;
  data: {
    sum: string;
  }
};
