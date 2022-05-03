const toZalgo = require('to-zalgo')

function zalgo(props) {
    const baseText = () => {
        // If the props string exists, return it
        if (props) {
            return props;
        } else {
            // Otherwise, return the default text
            return "Something went horribly wrong.";
        }
    }

    return (
        <>
            <br />
            <br />
            {toZalgo(baseText())}
            <br />
            <br />
        </>
    )
}

export default zalgo;