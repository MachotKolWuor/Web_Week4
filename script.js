// ===== SPENDWISE DASHBOARD - SCRIPT.JS =====
// 1. DATA -Using the same numbers from your Html

const monthlyBudget = 50000;

const categories = [
    { name: "Food", amount:8500, percent: 65 },
    { name: "Transport", amount: 4200, percent: 42 },
    { name: "Rent", amount: 15000, percent: 100 },
    { name: "Entertainment", amount: 3200, percent: 32 },
    { name: "Saving", amount: 12000, percent: 80 },
    { name: "Utilities", amount: 2800, percent: 28 },
];
// 2. FUNCTIONS - From your Week 5 Quiz
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

function calculateTotalSpent() {
    let total = 0;
    for (let i = 0; i < categories.length; i++) {
        // Don't count Savings as spending
        if (categories[i].name !== "Savings") {
            total = total + categories[i].amount;
        }
    }
    return total;
}
function formatKsh(number) {
    return "Ksh" + number.toLocaleString();
}
// 3. UPDATE THE DASHBOARD

function updateDashboard() {
    const totalSpent = calculateTotalSpent();
    const balance = calculateBalance(monthlyBudget, totalSpent);
    const percentUsed = Math.round((totalSpent / monthlyBudget) * 100);

    console.log("Total Spent:", totalSpend);
    console.log("Balance:", balance);
    console.log("Budget Used:", percentUsed + "%");

    // Update Sidebar footer - Ksh 34,000 / 50,000
    const SidebarSmall = document.querySelector(".sidebar-footer small");
    if (SidebarSmall) {
        SidebarSmall.textContent = '${formatKsh(totalSpent)} / ${formatKsh(monthlyBudget)}';
    }
    const sidebarProgress = document.querySelector(".sidebar-footer .progress span");
    if (sidebarProgress) {
        sidebarProgress.style.width = percentUsed + "%";
    }
    // Update summary cards - Total Balance & Monthly Spend
    const summaryCards = document.querySelectorAll(".summary-card strong");
    if (summaryCards.length >=2) {
        summaryCards[0].textContent = formatKsh(128500); // Total Balance from My HTML
        summaryCards[1].textContent = formatKsh(totalSpent); // Monthly Spend
    }


     
}
// 4. SEARCH - Filter cards as you type
const searchInput = document.querySelector(".search");
if (searchInput) {
    searchInput.addEventListener(".input", function () {
        const searchText = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        cards.forEach(function (card) {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
// 5. Sidebar nav - Make clicked link active
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        navItem.forEach(function (nav) {
            nav.classList.remove(active);
        });
        item.classList.add("active");
    });

});
// 6.CLICK A CARD - SHOW details
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        const name = card.querySelector("h3").textContent;
        const amount = card.querySelector(".amount").textContent;
        alert(name + ": " + amount);
    });
});