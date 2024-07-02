import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [selectCategory, setSelectCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "dinner",
      amount: 120,
      category: "Groceries",
    },
    {
      id: 2,
      description: "lunch",
      amount: 120,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "food",
      amount: 55,
      category: "Groceries",
    },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((expense) => expense.category === selectCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
