import express = require("express");
const router = express.Router();
import calculatorService from "../services/calculatorService";

router.post("/sum", (req: express.Request, res: express.Response) => {
  const { number1, number2 } = req.body;
  const resp = calculatorService.getSum(number1, number2);

  return res.status(resp.code).send(resp);
});

module.exports = router;
