// Get the form elements
let form = document.getElementById("converter-form");
let input = document.getElementById("input-value");
let conversion = document.getElementById("conversion-type");
let output = document.getElementById("conversion-result");

// Run conversion when the form is submitted
form.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Convert input value to a number
    let input_value = parseFloat(input.value);

    // Get the selected conversion index
    let select_elements = document.getElementsByTagName("select");
    let conversion_index = select_elements[0].selectedIndex;


    let result;
    let output_text;

    if (conversion_index === 0) {
        result = input_value * 2.54;
        output_text = input_value + " inches is " +
            result.toFixed(2) + " centimeters";

    } else if (conversion_index === 1) {
        result = input_value * 30.48;
        output_text = input_value + " feet is " +
            result.toFixed(2) + " centimeters";

    } else if (conversion_index === 2) {
        result = input_value * 0.91;
        output_text = input_value + " yards is " +
            result.toFixed(2) + " meters";

    } else if (conversion_index === 3) {
        result = input_value * 1.61;
        output_text = input_value + " miles is " +
            result.toFixed(2) + " kilometers";

    } else if (conversion_index === 4) {
        result = input_value * 0.39;
        output_text = input_value + " centimeters is " +
            result.toFixed(2) + " inches";

    } else if (conversion_index === 5) {
        result = input_value * 0.0328;
        output_text = input_value + " centimeters is " +
            result.toFixed(2) + " feet";

    } else if (conversion_index === 6) {
        result = input_value * 1.09;
        output_text = input_value + " meters is " +
            result.toFixed(2) + " yards";

    } else if (conversion_index === 7) {
        result = input_value * 0.62;
        output_text = input_value + " kilometers is " +
            result.toFixed(2) + " miles";
    }

    // Display the result
    output.innerHTML = output_text;
});
