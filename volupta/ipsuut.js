// Assume formatMilliseconds is a function defined elsewhere

// Creating an object literal
let config = {
    "L": formatMilliseconds
};

// Using the config object
let formatter = config["L"]; // Accessing the function via key "L"
let result = formatter(1000); // Assuming formatMilliseconds accepts milliseconds as input
console.log(result); // Output: Formatted result based on formatMilliseconds function
