// Array containing the possible Magic Eight Ball responses.
let answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Don't count on it.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Get references to the HTML elements we will use.
const question = document.getElementById("question");
const ball = document.getElementById("ball");
const circle = document.getElementById("circle");
const reset = document.getElementById("reset");
const addResponse = document.getElementById("addResponse");

// Display a random answer in the circle.
function displayAnswer() {
    // Generate a random number between 0 and the last array index.
    const randomIndex = Math.floor(Math.random() * answers.length);

    // Display the randomly selected answer.
    circle.innerHTML = answers[randomIndex];

    // Make the answer visible.
    circle.style.display = "flex";
}

// Check for a question when the user clicks the Magic Eight Ball.
ball.addEventListener("mousedown", function () {
    // Check whether the question field contains text.
    if (question.value.trim() === "") {
        alert("Please enter a yes/no question first.");
    } else {
        // Display a random answer if a question was entered.
        displayAnswer();
    }
});

// Hide the answer when the reset button is clicked.
reset.addEventListener("click", function () {
    circle.style.display = "none";
});

// BONUS: Allow the user to add a new Magic Eight Ball response.
addResponse.addEventListener("click", function () {
    const newResponse = prompt("Enter a new Magic Eight Ball response:");

    // Only add the response if the user entered something.
    if (newResponse !== null && newResponse.trim() !== "") {
        answers.push(newResponse.trim());

        // Output the new response and current number of responses.
        console.log("New response:", newResponse.trim());
        console.log("Current number of responses:", answers.length);
    }
});
