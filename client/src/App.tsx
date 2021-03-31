import React from "react";
import "./App.css";
import { Header, CalculatorForm } from "./components/index";
import { Layout } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient: QueryClient = new QueryClient();

  return (
    <Layout>
      <Header />
      <QueryClientProvider client={queryClient}>
        <CalculatorForm queryClient={queryClient} />
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
