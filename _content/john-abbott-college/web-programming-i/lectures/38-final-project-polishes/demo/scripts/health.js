// Init health value
let health = 100;

// Reusable function to update the health bar
function updateHealthBar() {
  const healthBar = document.getElementById("health-bar");
  // update the width dynamically
  healthBar.style.width = `${health}%`;

  // Change color dynamically
  if (health > 70) {
    // Green means GOOD
    healthBar.style.backgroundColor = "#4caf50";
  } else if (health > 30) {
    // Orange means things are SPOOKY
    healthBar.style.backgroundColor = "#ff9800";
  } else {
    // Red means your death is immanent
    healthBar.style.backgroundColor = "#f44336";
  }
}

// Call this function to decrease health
function decreaseHealth(amount) {
  // Pro Tip 👉 Prevent health from going below 0
  health = Math.max(0, health - amount);
  updateHealthBar();
}

// Call this function to increase health
function increaseHealth(amount) {
  // Pro Tip 👉 Prevent health from going above 100
  health = Math.min(100, health + amount);
  updateHealthBar();
}

// Pro Tip 👉 no need for a DOM ready check when using defer
updateHealthBar();
