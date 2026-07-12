# FinanceFlow

A personal finance tracking web application built with vanilla HTML, CSS, and JavaScript.

## What it does

FinanceFlow lets you track income and expenses across two connected pages:

- **Dashboard** — shows total balance, total income, total expenses, and a list of recent transactions.
- **Transactions** — a form to add new transactions (description, amount, type, category), plus a full transaction history table.

The app is fully interactive: adding a transaction updates the summary totals and table instantly, without reloading the page.

## Tech Stack

- HTML — semantic structure across two linked pages
- CSS — Flexbox and Grid layout, responsive design with media queries
- JavaScript — DOM manipulation, event handling, array methods (filter, reduce), form validation

## Known Limitations

- No data persistence — the transaction list resets when the page is reloaded (no localStorage or backend yet).
