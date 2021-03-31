import prepareResponseObject from "../utils/appUtils";

function getSum(number1: string, number2: string) {
  try {
    if (number1 && number2) {
      const sum = +number1 + +number2;
      return prepareResponseObject(200, "Successful", { sum });
    } else {
      return prepareResponseObject(400, "Please provide two numbers");
    }
  } catch (err) {
    console.error(err);
    return prepareResponseObject(500, 'Internal Server Error');
  }
}

export = {
  getSum,
};
