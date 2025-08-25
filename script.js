// Part 1: Basics
// Check project budget with conditional logic
function checkBudget() {
  let budget = prompt("Enter the project budget in Ksh:");
  budget = Number(budget);

  if (budget >= 10000000) {
    document.getElementById("budget-result").textContent =
      "✅ Budget approved: This project can move forward.";
  } else {
    document.getElementById("budget-result").textContent =
      "❌ Budget too low: Needs review and adjustment.";
  }
}

// Part 2: Functions
// Function to calculate total cost of project (base + tax + misc)
function projectCost(base, taxRate, misc) {
  return base + (base * taxRate) + misc;
}

function calculateProjectCost() {
  const total = projectCost(5000000, 0.16, 200000); 
  document.getElementById("cost-result").textContent =
    "Estimated Project Cost: Ksh " + total.toLocaleString();
}

// Part 3: Loops
// Materials list for construction project
function listMaterials() {
  const materials = ["Cement", "Sand", "Steel", "Bricks", "Glass", "Tiles"];
  const list = document.getElementById("materials-list");
  list.innerHTML = ""; // clear previous content

  // for loop
  for (let i = 0; i < materials.length; i++) {
    let li = document.createElement("li");
    li.textContent = materials[i];
    list.appendChild(li);
  }

  // while loop: countdown of delivery days in console
  let days = 3;
  while (days > 0) {
    console.log("🚚 Materials delivery countdown: " + days + " days left");
    days--;
  }
}

// Part 4: DOM Manipulation

// Toggle vision statement
document.getElementById("toggle-btn").addEventListener("click", function () {
  const text = document.getElementById("company-vision");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// Add dynamic element
const newPara = document.createElement("p");
newPara.textContent = "📢 Li Rui Construction is currently working on 5 major projects.";
document.body.appendChild(newPara);

// Change header style dynamically
document.querySelector("h1").style.color = "darkred";
