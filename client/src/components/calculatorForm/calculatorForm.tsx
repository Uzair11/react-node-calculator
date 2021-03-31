import React, { useState, useEffect } from "react";
import "./calculatorForm.css";
import { QueryClient } from "react-query";
import { getSum } from "../../services";
import {
  CalculatorFormProps,
  SumAPIResponse,
} from "../../models/calculatorFormModel";
import { Input, Button, Form } from "antd";

function CalculatorForm(props: CalculatorFormProps) {
  const queryClient: QueryClient = props.queryClient;
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onFormSubmit = (): void => {
    if (number1 && number2) {
      queryClient
        .fetchQuery("sum", () => getSum(number1, number2))
        .then((res: SumAPIResponse) => {
          if (res.code === 200) {
            setSum(res.data.sum.toString());
          }
        });
    }
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.name === "number1") setNumber1(event.currentTarget.value);
    else setNumber2(event.currentTarget.value);
  };

  useEffect(() => {
    if (number1.length !== 0 && number2.length !== 0)
      setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [number1, number2]);

  return (
    <div>
      <div className="main-box">
        <Form name="calculatorForm">
          <div className="form-div">
            <Form.Item className="mb-8">
              <label>Enter the numbers</label>
            </Form.Item>
            <Form.Item
              name="number1"
              className="input-field mb-8"
              rules={[{ required: true, message: "Invalid Number!" }]}
            >
              <Input
                className="input-field"
                type="number"
                name="number1"
                placeholder="Number 1"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              name="number2"
              className="mb-12"
              rules={[{ required: true, message: "Invalid Number!" }]}
            >
              <Input
                className="input-field"
                type="number"
                name="number2"
                placeholder="Number 2"
                onChange={onChangeHandler}
              />
            </Form.Item>

            <Form.Item>
              <Button disabled={isButtonDisabled} onClick={onFormSubmit}>
                Sum
              </Button>
            </Form.Item>
          </div>
        </Form>

        <hr />

        <div className="form-div mb-12">
          <label>Results</label>
          <Input
            className="input-field result-field"
            placeholder={sum}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default CalculatorForm;
