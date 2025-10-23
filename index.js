// Wait for the entire HTML document to be completely loaded and parsed
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Apply Initial JS Styling Class (Per your <style> block) ---
  // This immediately adds the '.js-loaded' class to change the list style and color.
  const funFactsList = document.querySelector("ul");
  if (funFactsList) {
    funFactsList.classList.add("js-loaded");
    console.log("JS: Fun facts list styling applied.");
  }

  // --- 2. Add Button Interactivity ---
  const joinButton = document.querySelector("button");
  if (joinButton) {
    joinButton.addEventListener("click", handleJoinClick);
  }

  // --- 3. Function to Handle Button Click ---
  function handleJoinClick() {
    const emailInput = document.querySelector('input[type="text"]');

    if (emailInput && emailInput.value.trim() !== "") {
      // Get the user's email
      const userEmail = emailInput.value.trim();

      // Simple success message (replace with actual form submission logic)
      alert(`Thanks for joining the Powerlifting community, ${userEmail}!`);

      // Clear the input field
      emailInput.value = "";

      // Optional: Change the button text/style briefly
      joinButton.textContent = "Joined!";
      joinButton.style.backgroundColor = "green";
      setTimeout(() => {
        joinButton.textContent = "Join Powerlifting";
        joinButton.style.backgroundColor = ""; // Reset or define a default
      }, 2000);
    } else {
      alert("Please enter your email address to join!");
      emailInput.focus(); // Focus the user on the input field
    }
  }

  // --- 4. Optional: Interactive Header Greeting ---
  const heading = document.querySelector("h1");
  if (heading) {
    // Change the greeting text when the user hovers over the name
    heading.addEventListener("mouseover", () => {
      heading.textContent = "Welcome, friend! I am Eunor.";
    });

    heading.addEventListener("mouseout", () => {
      heading.textContent = "Hi, my name is Eunor";
    });
  }

  console.log("JS: All interactive elements initialized.");
});
