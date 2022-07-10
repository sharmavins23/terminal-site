import { ReactTerminal } from "react-terminal";
// TODO: Find a way to make imports less cumbersome
import brainfuck from "./commands/code/brainfuck.cmd.js";
import echo from "./commands/text/echo.cmd.js";
import hello from "./commands/text/hello.cmd.js";
import help from "./commands/meta/help.cmd.js";
import popcat from "./commands/img/popcat.cmd.js";
import shrug from "./commands/text/shrug.cmd.js";
import zalgo from "./commands/text/zalgo.cmd.js";

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
        brainfuck: (props) => brainfuck(props),
        echo: (props) => echo(props),
        hello: hello(),
        help: help(),
        popcat: popcat(),
        shrug: shrug(),
        zalgo: (props) => zalgo(props)
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
