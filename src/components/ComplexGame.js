import { forwardRef, useImperativeHandle, useState } from "react";

const ComplexGame =  forwardRef((props, ref) => {
    /// Write your code here
    const [output, setOutput] = useState();

    useImperativeHandle(ref, () => ({
        play() {
            setOutput('Write your code here.');
        }
    }));

    return (
        <div>{output}</div>
    );
});

export default ComplexGame;
