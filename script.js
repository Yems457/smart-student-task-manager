// Selecting the DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to handle adding a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a valid task.");
        return;
    }

    // Create a new list item element
    const li = document.createElement('li');
    
    // Add text and a delete button inside the list item
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    // Toggle cross-out styling when the task text is clicked
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Remove the task entirely when the delete button is clicked
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    });

    // Append the new task to the main list container
    taskList.appendChild(li);

    // Clear out the text input for the next item
    taskInput.value = '';
}

// Fire the function when clicking the Add button
addBtn.addEventListener('click', addTask);

// Fire the function when pressing the Enter key inside the input box
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
