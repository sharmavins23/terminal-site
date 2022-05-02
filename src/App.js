import { ReactTerminal } from "react-terminal";
import hello from "./commands/text/hello.cmd.js";
import help from "./commands/meta/help.cmd.js";

function App() {
    const welcomeMessage = (
        <>
            Welcome to the interactive <b>VINS.exe</b> command line.
            <br />
            Please type <b>help</b> to see the available commands.
            <br />
            <br />
        </>
    );

    const errorMessage = (
        <>
            <b style={{ color: "red" }}>
                FATAL ERR: The term is not recognized as the name of a command, function, script file, or operable program.
            </b>
            <br />
            Check the spelling of the command, or type <b>help</b> to see the available commands.
            <br />
        </>
    );

    const commands = {
        hello: hello(),
        help: help(null)
    };

    return (
        <>
            <div style={{
                // Force set the width and height to match the parent
                height: "98vh",
                // Set background color as black
                backgroundColor: "black"
            }}>
                <ReactTerminal
                    welcomeMessage={welcomeMessage}
                    prompt="$"
                    commands={commands}
                    errorMessage={errorMessage}
                    enableInput={true}
                    showControlBar={true}
                    showControlButtons={false}
                    theme="material-dark"
                />
            </div>
        </>
    );
}

export default App;
