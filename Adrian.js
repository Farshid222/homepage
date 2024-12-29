// Select form and comment container
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

// Add event listener for form submission
commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get name and comment values
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && comment) {
        // Create a new comment div
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        // Add name and comment to the new div
        commentDiv.innerHTML = `
            <h4>${name}</h4>
            <p>${comment}</p>
        `;

        // Append the new comment to the comments container
        commentsContainer.appendChild(commentDiv);

        // Clear the form inputs
        commentForm.reset();
    }
});