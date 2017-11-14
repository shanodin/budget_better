use budget_better

db.transactions.drop()

db.transactions.insert([
  {
    user: "Alice",
    name: "Coffee",
    category: "unplanned",
    amount: 2.80,
    date: new Date(),
    subcategories: ["Coffee"],
    notes: ""
  },
  {
    user: "Alice",
    name: "sandwich",
    category: "planned",
    amount: 1.60,
    date: new Date(),
    subcategories: ["lunch"],
    notes: "Sainsbury's"
  },
  {
    user: "Matt",
    name: "train tickets",
    category: "planned",
    amount: 50.00,
    date: new Date(),
    subcategories: ["travel"],
    notes: ""
  }
])