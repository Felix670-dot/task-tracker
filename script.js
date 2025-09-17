// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.


const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

console.log(taskForm);
console.log(taskTable);


// script.js
// Section 2: App State Variables
let tasks = [];


// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault(); // this function stops our form from reloading the page

    // TODO: Get form input values
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    const taskCompletion = false;

    // TODO: Validate input fields
    if(taskName == "" || taskDescription == ""){
        alert("Task name and Description is required!");
    }
    // TODO: Update the tasks array
    tasks.push({name: taskName, description: taskDescription, deadline: taskDeadline, completion: taskCompletion});
    render();
}

// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map(task => `
        <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        ${task.completion 
            ? `<td colspan="2">Task Complete</td>` 
            : `<td><button onclick="markTaskComplete(this)">Complete</button></td>
              <td><button onclick="removeTask(this)">Remove</button></td>`}
        </tr>
        `).join('');
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// EFunction to handle complete button
function markTaskComplete(button){
    const row = button.closest('tr');
    
    const allRows = Array.from(taskTable.querySelectorAll('tr'));
    const taskIndex = allRows.indexOf(row);
    
    console.log("Task index:", taskIndex);
    console.log("Tasks array:", tasks);
    
    if (taskIndex >= 0 && tasks[taskIndex]) {
        const task = tasks[taskIndex];
        task.completion = true;
        render();
    } else {
        console.error("Task not found at index:", taskIndex);
    }
}

// Function to handle remove button
function removeTask(button){
    const row = button.closest('tr');
    
    const allRows = Array.from(taskTable.querySelectorAll('tr'));
    const taskIndex = allRows.indexOf(row);
    
    if (taskIndex >= 0 && tasks[taskIndex]) {
        tasks.splice(taskIndex, 1);
        render();
    } else {
        console.error("Task not found at index:", taskIndex);
    }
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();