let transactions = [
    {
        description: "Salary",
        amount: 3000,
        type: "income",
        category: "salary",
        date: "June 1, 2026"
    },
    {
        description: "Groceries",
        amount: 150,
        type: "expense",
        category: "food",
        date: "June 2, 2026"
    },
    {
        description: "Netflix",
        amount: 20,
        type: "expense",
        category: "entertainment",
        date: "June 3, 2026"
    },
    {
        description: "Electricity Bill",
        amount: 130,
        type: "expense",
        category: "utilities",
        date: "June 4, 2026"
    }
];

function calculateTotals(transactions) {
    let totalIncome = 0;
    let totalExpenses = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].type === "income") {
            totalIncome = totalIncome + transactions[i].amount;
        } else if (transactions[i].type === "expense") {
            totalExpenses = totalExpenses + transactions[i].amount;
        }
    }
    let balance = totalIncome - totalExpenses;
    return {
        totalIncome: totalIncome,
        totalExpenses: totalExpenses,
        balance: balance
    };
}

function updateSummaryCards() {
    const incomeEl = document.getElementById("total-income");
    const expenseEl = document.getElementById("total-expense");
    const balanceEl = document.getElementById("balance");
    if (!incomeEl || !expenseEl || !balanceEl) return;
    const totals = calculateTotals(transactions);
    incomeEl.textContent = "$" + totals.totalIncome;
    expenseEl.textContent = "$" + totals.totalExpenses;
    balanceEl.textContent = "$" + totals.balance;
}

function renderTransactions(transactions) {
    const tbody = document.getElementById("transaction-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    for (let i = 0; i < transactions.length; i++) {
        const t = transactions[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${t.date}</td>
            <td>${t.description}</td>
            <td>${t.category}</td>
            <td>${t.type === "income" ? "+" : "-"}$${t.amount}</td>
        `;
        tbody.appendChild(row);
    }
}

const form = document.querySelector("form");

function getFormValues() {
    return {
        description: document.getElementById("description").value,
        amount: Number(document.getElementById("amount").value),
        type: document.getElementById("type").value,
        category: document.getElementById("category").value
    };
}

function isValidTransaction(values) {
    return values.description.trim() !== "" && !Number.isNaN(values.amount) && values.amount > 0;
}

function buildTransaction(values) {
    return {
        description: values.description,
        amount: values.amount,
        type: values.type,
        category: values.category,
        date: new Date().toLocaleDateString()
    };
}

function handleFormSubmit(event) {
    event.preventDefault();

    const values = getFormValues();

    if (!isValidTransaction(values)) {
        alert("Please enter a description and an amount greater than 0.");
        return;
    }

    transactions.push(buildTransaction(values));
    updateSummaryCards();
    renderTransactions(transactions);
    form.reset();
}

if (form) {
    form.addEventListener("submit", handleFormSubmit);
}

updateSummaryCards();
renderTransactions(transactions);

const expensesOnly = transactions.filter(function(t) {
    return t.type === "expense";
});
console.log("Expenses only:", expensesOnly);

const incomeOnly = transactions.filter(function(t) {
    return t.type === "income";
});
console.log("Income only:", incomeOnly);

const totalIncomeReduced = transactions.reduce(function(sum, t) {
    if (t.type === "income") {
        return sum + t.amount;
    } else {
        return sum;
    }
}, 0);
console.log("Total income (via reduce):", totalIncomeReduced);

const totalExpenseReduced = transactions.reduce(function(sum, t) {
    if (t.type === "expense") {
        return sum + t.amount;
    } else {
        return sum;
    }
}, 0);
console.log("Total expense (via reduce):", totalExpenseReduced);

const balanceReduced = transactions.reduce(function(sum, t) {
    if (t.type === "income") {
        return sum + t.amount;
    } else {
        return sum - t.amount;
    }
}, 0);
console.log("Balance (via reduce):", balanceReduced);
