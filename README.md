# This Project

This expense tracker project is designed to help users manage their expenses efficiently. It features a table component that displays a list of expenses, each with a Description, Amount, and Category. Users can delete any expense, and when an expense is deleted, the Total Amount is recalculated and updated to reflect the new total.

## Installation and run project

```
npm create vite@latest
cd xxx
npm install
npm run dev
```

## Key Features

### Expense Table Component

Displays a list of expenses.
Each expense has a Description, Amount, and Category.

### Filter Component

Allows users to filter the expenses by Category.

### Integration with Expense Table

The expense table updates to show only the expenses that match the selected category.

### Delete Functionality

Allows users to delete any expense from the table.
When an expense is deleted, the Total Amount is recalculated.

### Filter Functionality

A function will update the state with the selected category.
The expense table will display only the expenses that match the selected category.

### Total Amount Calculation

Automatically updates when an expense is added or deleted.

## Technologies Used

Utilizes useState to manage the state of expenses and the total amount.
