import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    {
      id: 1,
      description: "lunch",
      amount: 120,
      category: "lifestyle",
    },
    {
      id: 2,
      description: "dinner",
      amount: 120,
      category: "lifestyle",
    },
    {
      id: 1,
      description: "lunch",
      amount: 55,
      category: "lifestyle",
    },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("delete", id)}
      />
    </div>
  );
}

export default App;
