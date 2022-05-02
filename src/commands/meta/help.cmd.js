function help(props) {
    // TODO: Add support for command specification

    let commandsList = {
        text: [
            {
                hello: {
                    description: "Prints a greeting to the screen",
                },
            }, {
                shrug: {
                    description: "Shrugs",
                }
            }
        ],
        meta: [
            {
                help: {
                    description: "Prints this help message",
                }
            }
        ]
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

    // TODO: Figure out a way to make this more dynamic
    // Map commands to a JSX string
    let textCommands = commandsList.text.map((command) => {
        let commandName = Object.keys(command)[0];
        let commandDescription = command[commandName].description;
        return (
            <>
                {"└───"}<b>{commandName}</b> - {commandDescription}
                <br />
            </>
        );
    });
    let metaCommands = commandsList.meta.map((command) => {
        let commandName = Object.keys(command)[0];
        let commandDescription = command[commandName].description;
        return (
            <>
                {"--> "}<b>{commandName}</b> - {commandDescription}
                <br />
            </>
        );
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