function echo(props) {
    const baseText = () => {
        // If the props string exists, return it
        if (props) {
            return props;
        } else {
            // Otherwise, return the default text
            return "Enter a string for the terminal to echo.";
        }
    }

    return (
        <>
            {baseText()}
        </>
    )
}

export default echo;