const button = document.getElementById('animateBtn');
const status = document.getElementById('status');

// Check localStorage for saved animation preference
const animationDone = localStorage.getItem('animationDone');

if (animationDone === 'true') {
  status.textContent = "Animation already triggered before.";
} else {
  status.textContent = "Click the button to see animation!";
}

// Function to trigger animation and save preference
function triggerAnimation() {
  // Add animation class
  button.classList.add('animate');
  
  // When animation ends, remove the class and save preference
  button.addEventListener('animationend', () => {
    button.classList.remove('animate');
    localStorage.setItem('animationDone', 'true');
    status.textContent = "Animation completed and saved!";
  }, { once: true }); // ensures listener runs only once
}

button.addEventListener('click', triggerAnimation);
