// Select the input element where the user types a new task
const addTask = document.querySelector(".input");

// Select the submit button that the user clicks to add the task
const submit = document.querySelector("button");

// Select the unordered list element where tasks will be displayed
const ul = document.querySelector("ul");

// Add an event listener to the submit button for the "click" event
submit.addEventListener("click", function() {
    // Get the value of the input field (the task the user entered)
    const task = addTask.value;

    // Check if the input field is empty
    if (task === "") {
        alert("Please enter a task");  // If empty, show an alert
    } else {
        // Create a new list item (li) element
        const list = document.createElement("li");
        // Set the text content of the list item to the task entered by the user
        list.textContent = task;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        // Add a Font Awesome trash can icon to the button
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        // Add an event listener to the remove button to delete the task when clicked
        removeButton.addEventListener('click', function() {
            list.remove();  // Remove the list item from the list
        });

        // Append the remove button to the list item
        list.appendChild(removeButton);
        // Append the list item to the unordered list (ul)
        ul.appendChild(list);

        // Clear the input field for the next task
        addTask.value = "";
    }
});
