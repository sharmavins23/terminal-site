function brainfuck(props) {
    const baseText = () => {
        // If the props string exists, return it
        if (props) {
            return props;
        } else {
            // Otherwise, return a default string
            return "Brainfuck Converter";
        }
    }

    // Functionality based on this project:
    //  - https://github.com/sharmavins23/Brainfuck-String-Creator
    return (
        <>
            <br />
            {convertStringToBFComponents(baseText())}
        </>
    )
}

// ===== Space complexity reduction ============================================

// Given a number, create the corresponding tick increment strings
function createTickStrings(num) {
    let upTick = "";
    let downTick = "";

    // Get the decimal amount of loops and append these values
    let numDecimal = Math.floor(num / 10);
    upTick += "+".repeat(numDecimal);
    downTick += "-".repeat(numDecimal);

    // Append the BF loop
    upTick += "[>++++++++++<-]>";
    downTick += "[>----------<-]>";

    // Append the excess values (after the divisions of 10)
    let numExcess = num % 10;
    upTick += "+".repeat(numExcess);
    downTick += "-".repeat(numExcess);

    // Return the strings
    return [upTick, downTick];
}

// ===== Conversion functions ==================================================

// Given a character, return the corresponding BF instructions as a component
function convertCharToBF(char) {
    let bfString = ""; // Empty string for instructions

    // First, get the ASCII decimal value of the character
    let charDecimal = char.charCodeAt(0);

    // Then, get the corresponding tick strings
    let tickStrings = createTickStrings(charDecimal);
    let upTick = tickStrings[0];
    let downTick = tickStrings[1];

    // Create the instruction by appending the strings
    bfString += upTick + ".<" + downTick;

    // Create a JSX component out of this character
    return (
        <>
            {bfString}
            <br />
        </>
    );
}

// Given a string, return the components of the BF instructions
function convertStringToBFComponents(str) {
    let bfComponents = []; // Empty array for components

    // For each character in the string, convert it to BF instructions
    for (let i = 0; i < str.length; i++) {
        bfComponents.push(convertCharToBF(str[i]));
    }

    return (
        <>
            {bfComponents}
        </>
    );
}

export default brainfuck;