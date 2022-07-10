function help(props) {
    // TODO: Add support for command specification

    let commandsList = {
        code: [
            {
                brainfuck: {
                    description: "Convert a string to working Brainfuck code"
                }
            }
        ],
        img: [
            {
                popcat: {
                    description: "Pop pop pop pop pop pop pop pop",
                }
            }
        ],
        meta: [
            {
                help: {
                    description: "Prints this help message",
                }
            }
        ],
        text: [
            {
                echo: {
                    description: "Echoes a string to the terminal line."
                }
            },
            {
                hello: {
                    description: "Prints a greeting to the screen",
                },
            }, {
                shrug: {
                    description: "Shrugs",
                }
            }, {
                zalgo: {
                    description: "Make a horrible decision. It will have consequences."
                }
            }
        ],
    };

    // Create a list of the command segments
    let commandSegments = Object.keys(commandsList);
    // Create a list of corresponding JSON elements
    let commandSegmentJSX = commandSegments.map(commandSegment => {
        return (
            <>
                <b>{"STD::"}{commandSegment}</b>
                <br />
                {commandTree(commandsList[commandSegment])}
                <br />
                <br />
            </>
        )
    });

    // Iterate through the JSON, formatting this into blocks
    return (
        <>
            Available commands are:
            <br />
            <br />
            {commandSegmentJSX}
        </>
    )
}

// Given a specific command JSON segment, return a JSX string of the TREE
function commandTree(commandSegment) {
    let returnJSX = [];

    // Iterate through all commands
    for (let i = 0; i < commandSegment.length; i++) {
        // Get the command name and description
        let commandName = Object.keys(commandSegment[i])[0];
        let commandDescription = commandSegment[i][commandName].description;

        // If we're not on the last command
        if (i !== commandSegment.length - 1) {
            returnJSX.push(
                <>
                    {"├───"}<b>{commandName}</b> - {commandDescription}
                    <br />
                </>
            )
        } else { // We're on the last command
            returnJSX.push(
                <>
                    {"└───"}<b>{commandName}</b> - {commandDescription}
                </>
            )
        }
    }

    return returnJSX;
}

export default help;