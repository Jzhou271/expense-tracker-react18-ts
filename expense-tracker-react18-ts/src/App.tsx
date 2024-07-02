import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "breakfast",
      amount: 120,
      category: "lifestyle",
    },
    {
      id: 2,
      description: "lunch",
      amount: 120,
      category: "lifestyle",
    },
    {
      id: 3,
      description: "dinner",
      amount: 55,
      category: "lifestyle",
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
