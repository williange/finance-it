# Financial Manager - Requirements Document

## 1. General Account (Workspace)
* An user needs to be able to create a General Account.
* A General Account needs to have at least one owner/admin.
* A General Account can have multiple users linked to it.
* A General Account must support Role-Based Access Control (e.g., Admin, Editor, Viewer).
* A General Account can have multiple Bank Accounts.
* A General Account can have multiple Credit Cards.
* An user needs to be able to add another user to their General Account.

## 2. User
* An user needs to be able to log in and authenticate.
* An user can be linked to one or more General Accounts.

## 3. Bank Account
* A Bank Account needs a current balance.
* A Bank Account can have transactions (past and future).
* A Bank Account can have predicted/scheduled transactions.

## 4. Credit Card *(Separated from Bank Account)*
* A Credit Card must have a predefined Credit Limit and calculate the Available Limit.
* A Credit Card operates based on "Invoices" (Faturas).
* An Invoice needs a closing date (statement date) and a due date.
* A Credit Card can have transactions linked to specific monthly Invoices.

## 5. Transactions
* A transaction must have a type: `Income`, `Expense`, or `Transfer` (between user's own accounts).
* A transaction must have a value.
* A transaction must have a date (dd/mm/yyyy).
* A transaction must have a status: `completed` (true/false).
* A transaction must be linked to a Bank Account OR a Credit Card.
* A transaction can be linked to a Category.
* A transaction can be marked as `isRecurring` (fixed monthly expenses).

## 6. Installments (Credit Card Purchases)
* Installment purchases must generate **independent transactions for each future month** instantly upon creation.
* An installment transaction must hold a reference to an `installmentGroupId` (or `purchaseId`) to link it to its siblings.
* An installment transaction must track its cycle position (e.g., `currentInstallment` and `totalInstallments`, like "2/12").
* **Chain Editing:** When editing or deleting an installment transaction, the system must prompt the user to apply the change to: "Only this installment", "This and future installments", or "All installments in the group".
* The generation of future dates must respect the Credit Card's closing and due dates, correctly handling end-of-month anomalies (e.g., February 28th/29th).

## 7. Categories & Budgets
* A category needs a name.
* A category can have a color for UI representation.
* **Budgets:** A category can have a defined monthly spending limit.
* The system must calculate and display budget progress based on the current month's completed and pending transactions.

## 8. Graphics & Reports
* An user needs to be able to see Income vs. Expense comparisons over time (Bar/Line charts).
* An user needs to be able to see their expenses distributed by category for a specific period (Pie/Donut charts).
* An user needs to be able to see balance projections (predicted future wealth) based on scheduled transactions and future credit card invoices.
* Graphics must support filtering by period of time (daily, weekly, monthly, yearly) and by source (specific Bank Account or Credit Card).

## 9. Calendar
* A calendar must show all transactions, future and past, placed on their exact dates.
* A calendar must display the predicted daily balance at the end of each day.

## 10. Technical / System Requirements
* **Import/Export:** The system should allow exporting reports/transactions (CSV/PDF) and importing bank statements (OFX/CSV).
* **Alerts:** The system should notify the user about upcoming invoice due dates or budgets nearing their limits.
* **Offline-First / Resilience:** The application should allow users to create transactions even when offline, syncing with the database when the connection is restored.
* **Localization:** The UI should support currency formatting.
