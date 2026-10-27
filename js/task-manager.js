
"use strict";

// PART 1: WEEKLY TASK GOAL CALCULATOR


// Calculate the user's weekly task goal.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate the weekly goal using five workdays.
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to the weekly goal.
    let totalGoal = weeklyGoal + bonusTasks;

    // Create the output message.
    let output =
        userName + ", your weekly task goal is " +
        totalGoal + " tasks.";

    // Display the result on the page.
    document.getElementById("goal-message").textContent = output;
}

// Handle the Calculate Goal button click.
document.getElementById("goal-btn").addEventListener("click", function (event) {
    // Prevent the form from submitting and refreshing the page.
    event.preventDefault();

    // Get the values entered by the user.
    let userName = document.getElementById("user-name").value.trim();
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Validate the input.
    if (
    document.getElementById("daily-goal").value.trim() === "" ||
    document.getElementById("bonus-tasks").value.trim() === "" ||
    !Number.isFinite(dailyGoal) ||
    !Number.isFinite(bonusTasks) ||
    dailyGoal < 0 ||
    bonusTasks < 0
) {
    alert("Please enter valid, non-negative numbers for your goals.");
    return;
}

    // Calculate and display the weekly goal.
    weeklyGoal(userName, dailyGoal, bonusTasks);
});



// PART 2: TASK MANAGER


// Store tasks as an array of objects.
let tasks = [];

let nextTaskId = 1;

// Find the Task Manager elements.
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-name");
const taskPriority = document.getElementById("task-priority");
const taskImportant = document.getElementById("task-important");
const taskList = document.getElementById("task-list");
const deleteAllButton = document.getElementById("delete-all-tasks");



// Log tasks as JSON in the browser console.


function logTasks() {
    console.log(JSON.stringify(tasks));
}


// Display tasks using DOM nodes.


function displayTasks() {
    // Clear the displayed task items.
    taskList.replaceChildren();

    // Display a message if there are no tasks.
    if (tasks.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.textContent =
            "No tasks yet. Add a task to get started.";

        emptyMessage.className = "text-muted";

        taskList.appendChild(emptyMessage);
        return;
    }

    // Create a display card for each task.
    tasks.forEach(function (task) {
        const taskCard = document.createElement("div");

        taskCard.className = "task-item card mb-3";
        taskCard.style.padding = "15px";

        // Highlight important tasks in red.
        if (task.isImportant) {
            taskCard.style.backgroundColor = "#ffe1e1";
            taskCard.style.borderLeft = "6px solid red";
        }

        // Apply styles based on task priority.
        if (task.priority === "High") {
            taskCard.style.borderBottom = "4px solid #dc3545";
        } else if (task.priority === "Medium") {
            taskCard.style.borderBottom = "4px solid #ffc107";
        } else {
            taskCard.style.borderBottom = "4px solid #198754";
        }

        // Display the task name.
        const taskName = document.createElement("span");

        taskName.textContent = task.name;
        taskName.style.fontWeight = "bold";

        // Strike through completed tasks.
        if (task.isCompleted) {
            taskName.style.textDecoration = "line-through";
            taskName.style.color = "#666";
        }

        taskCard.appendChild(taskName);

        // Display the task priority.
        const priorityLabel = document.createElement("p");

        priorityLabel.textContent = "Priority: " + task.priority;
        priorityLabel.className = "mb-2";

        taskCard.appendChild(priorityLabel);

        // Display the importance status.
        if (task.isImportant) {
            const importantLabel = document.createElement("p");

            importantLabel.textContent = "Important Task";
            importantLabel.style.color = "red";
            importantLabel.style.fontWeight = "bold";

            taskCard.appendChild(importantLabel);
        }

        // Create the Complete button.
        const completeButton = document.createElement("button");

        completeButton.type = "button";
        completeButton.className =
            "btn btn-success btn-sm me-2 mb-2";

        completeButton.textContent = task.isCompleted
            ? "Mark Incomplete"
            : "Complete";

        completeButton.addEventListener("click", function () {
            task.isCompleted = !task.isCompleted;

            displayTasks();
            logTasks();
        });

        taskCard.appendChild(completeButton);

        // Create the Edit button.
        const editButton = document.createElement("button");

        editButton.type = "button";
        editButton.className =
            "btn btn-primary btn-sm me-2 mb-2";

        editButton.textContent = "Edit";

        editButton.addEventListener("click", function () {
            const updatedName = prompt(
                "Enter the updated task name:",
                task.name
            );

            if (updatedName === null) {
                return;
            }

            if (updatedName.trim() === "") {
                alert("Task name cannot be empty.");
                return;
            }

            task.name = updatedName.trim();

            displayTasks();
            logTasks();
        });

        taskCard.appendChild(editButton);

        // Create the Delete button.
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className =
            "btn btn-danger btn-sm mb-2";

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(function (currentTask) {
                return currentTask.id !== task.id;
            });

            displayTasks();
            logTasks();
        });

        taskCard.appendChild(deleteButton);

        // Add the task card to the task-list container.
        taskList.appendChild(taskCard);
    });
}


// Add a new task.


function addTask(event) {
    event.preventDefault();

    // Get the task name.
    const name = taskInput.value.trim();

    // Validate the task name.
    if (name === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a task object.
    const newTask = {
        id: nextTaskId,
        name: name,
        priority: taskPriority.value,
        isImportant: taskImportant.checked,
        isCompleted: false
    };

    // Add the task object to the array.
    tasks.push(newTask);

    nextTaskId++;

    // Update the webpage and console.
    displayTasks();
    logTasks();

    // Reset the input fields.
    taskForm.reset();
}

// Delete the entire task list.


function deleteTaskList() {
    if (tasks.length === 0) {
        alert("There are no tasks to delete.");
        return;
    }

    const confirmed = confirm(
        "Are you sure you want to delete all tasks?"
    );

    if (confirmed) {
        tasks = [];

        displayTasks();
        logTasks();
    }
}



// Register event listeners.


// Submit the form to add a task.
taskForm.addEventListener("submit", addTask);

// Delete all tasks when the button is clicked.
deleteAllButton.addEventListener("click", deleteTaskList);

// Display the initial task list.
displayTasks();
