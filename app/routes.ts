export function useRoutes(app: any) {
  app.use("/calculator", require("./controllers/calculatorController"));
}
