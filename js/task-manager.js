// Calculate the user's weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate the weekly goal using five workdays
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to the weekly goal
    let totalGoal = weeklyGoal + bonusTasks;

    // Create the output message
    let output = userName + ", your weekly task goal is " + totalGoal + " tasks.";

    // Display the result on the page
    document.getElementById("goal-message").innerHTML = output;
}

// Handle the Calculate Goal button click
document.getElementById("goal-btn").addEventListener("click", function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the values entered by the user
    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Call the weeklyGoal function
    weeklyGoal(userName, dailyGoal, bonusTasks);
});
// Store tasks in an array
let myTasks = [];

// Find the Task Manager elements
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-task");

// Create the unordered list dynamically
const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";

// Add the unordered list to the task-list container
taskList.appendChild(userTasks);

// Handle the Add Task button click
addTaskButton.addEventListener("click", function () {

    // Get the task entered by the user
    let taskText = taskInput.value.trim();

    // Check that the input is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Store the task in the array
    myTasks.push(taskText);

    // Create a new list item
    let listItem = document.createElement("li");

    // Add the task text to the list item
    listItem.textContent = taskText;

    // Append the item to the unordered list
    userTasks.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
});