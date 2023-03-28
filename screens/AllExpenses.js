import React, { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      fallbackText="No expenses found"
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
    />
  );
};

export default AllExpenses;
