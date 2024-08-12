// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    return (
        <button
            onFocus={(_e) => console.log('Good!')}
            onBlur={(_e) => console.log('Hey! Eyes on me!')}
        >Eyes on me</button>
    );
}

export default EyesOnMe;