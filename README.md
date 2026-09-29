</> Markdown

 # Interactive Productivity Dashboard
 "This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features."

 ## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

## Weekly Task Goals

The Weekly Task Goals feature allows users to calculate their weekly task target based on their daily task goal and additional weekly bonus tasks. The calculator multiplies the daily goal by five workdays and then adds the weekly bonus tasks to determine the user's total weekly task goal.
      
Imperial/Metric Converter

The Imperial/Metric Converter is an interactive tool that converts measurements between Imperial and Metric units. The application accepts a numeric value and allows the user to select a conversion between inches, feet, yards, miles, centimeters, meters, and kilometers. The converter then calculates and displays the converted value.

Logic and Pseudocode
BEGIN

    DISPLAY "Metric Converter"
    DISPLAY "Enter a numeric value:"
    INPUT value

    DISPLAY "Select a conversion:"
    DISPLAY "1. Inch to Centimeter"
    DISPLAY "2. Foot to Centimeter"
    DISPLAY "3. Yard to Meter"
    DISPLAY "4. Mile to Kilometer"
    DISPLAY "5. Centimeter to Inch"
    DISPLAY "6. Centimeter to Foot"
    DISPLAY "7. Meter to Yard"
    DISPLAY "8. Kilometer to Mile"

    INPUT choice

    IF choice = 1 THEN
        SET result = value * 2.54
        SET unit = "cm"

    ELSE IF choice = 2 THEN
        SET result = value * 30.48
        SET unit = "cm"

    ELSE IF choice = 3 THEN
        SET result = value * 0.91
        SET unit = "m"

    ELSE IF choice = 4 THEN
        SET result = value * 1.61
        SET unit = "km"

    ELSE IF choice = 5 THEN
        SET result = value * 0.39
        SET unit = "in"

    ELSE IF choice = 6 THEN
        SET result = value * 0.0328
        SET unit = "ft"

    ELSE IF choice = 7 THEN
        SET result = value * 1.09
        SET unit = "yd"

    ELSE IF choice = 8 THEN
        SET result = value * 0.62
        SET unit = "mi"

    ELSE
        DISPLAY "Invalid conversion choice."
    END IF

    IF choice >= 1 AND choice <= 8 THEN
        DISPLAY "Converted value: " + result + " " + unit
    END IF

END

Magic Eight Ball

The Magic Eight Ball is an interactive feature of the dashboard that allows users to enter a yes/no question and receive a randomly selected answer.

Technical Features

Uses HTML to create the question field, Magic Eight Ball image, answer area, and buttons.

Uses CSS to style the Magic Eight Ball and provide the shaking animation.

Uses JavaScript event listeners to respond when the user interacts with the ball and reset button.

Uses Math.random() to select a random response from an array of possible answers.

Validates that the user has entered a question before displaying an answer.

The reset button hides the current answer so the user can ask another question.

Includes a bonus feature that allows users to add new responses to the Magic Eight Ball response array.

The project was developed and tested on a separate development Git branch before being merged into main.