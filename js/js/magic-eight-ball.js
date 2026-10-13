/* Magic Eight Ball responses */
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

// Get references to the HTML elements.
const question = document.getElementById("question");
const ball = document.getElementById("ball");
const circle = document.getElementById("circle");
const reset = document.getElementById("reset");
const addResponse = document.getElementById("addResponse");

// Display a random answer.
function displayAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);

    // Display the answer safely.
    circle.textContent = answers[randomIndex];
    circle.style.display = "flex";
}

// Display an answer when the ball is clicked.
ball.addEventListener("click", function () {
    if (question.value.trim() === "") {
        alert("Please enter a yes/no question first.");
    } else {
        displayAnswer();
    }
});

// Hide the answer when starting another question.
reset.addEventListener("click", function () {
    circle.style.display = "none";
    circle.textContent = "";
});

// BONUS: Allow users to add their own responses.
addResponse.addEventListener("click", function () {
    const newResponse = prompt(
        "Enter a new Magic Eight Ball response:"
    );

    if (newResponse !== null && newResponse.trim() !== "") {
        answers.push(newResponse.trim());

        console.log("New response:", newResponse.trim());
        console.log("Current number of responses:", answers.length);
    }
});
