// Grabs the string value from app.html page
function getString() {

    // Acquires the user's string from the form element
    let stringVal = document.getElementById("userString").value;

    // Validates the user string to make sure its letters only
    let regex = /^[A-Za-z ]+$/;
    let isValid = regex.test(document.getElementById("userString").value);

    if (!isValid) {
        alert("Only enter letters with no numbers or special characters");
        
    } else if (isValid) {

        // Passes on the string to have its reverse returned
        let reversedString = reverseString(stringVal)

        // Passes on the reversed string to be outputted to the user
        displayString(reversedString);
    }
}

// Reverses the string given by the user
function reverseString(origVal) {

    // Array or variable to hold the reverse string of the inputted string
    let revString = [];

    // This loop cycles through the inputted string from its end to its beginning
    // Each value is then inputted into a string array
    for (let index = origVal.length - 1; index >= 0; index--) {
        revString += origVal[index];
    }

    return revString;
}

// Displays the reversed string to the user
function displayString(revString) {
    
    // Here the reversed string is outputted on the app page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    // This makes the result box visible to the user, which has added flair for appeal
    document.getElementById("alert").classList.remove("invisible");
}