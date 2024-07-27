// Select the element where the token count is displayed
const tokenCountElement = document.getElementById('token-count');

// Create a new MutationObserver
const observer = new MutationObserver(mutationsList => {
  // Loop through the mutations
  mutationsList.forEach(mutation => {
    // Check if the mutation is related to the completion tokens
    if (mutation.target.classList.contains('completion-token')) {
      // Update the token count based on the current number of completion tokens
      const completionTokens = document.getElementsByClassName('completion-token');
      tokenCountElement.textContent = completionTokens.length;
    }
  });
});

// Start observing mutations in the DOM
observer.observe(document.body, { childList: true, subtree: true });
