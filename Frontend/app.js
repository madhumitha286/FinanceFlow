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
function calculateTotals(transactions){
        let totalIncome = 0;
        let totalExpenses = 0;
        for (let i = 0; i < transactions.length; i++){
            if(transactions[i].type === "income"){
                totalIncome = totalIncome + transactions[i].amount;
            }
            else if (transactions[i].type === "expense") {
            totalExpenses = totalExpenses + transactions[i].amount;}}
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
updateSummaryCards();
renderTransactions(transactions);

