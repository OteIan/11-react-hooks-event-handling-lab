// Code Keypad Component Here
import React from "react"

function Keypad (){
    return (
        <input
            type="password"
            onChange={(_e) => console.log('Entering password...')}
        ></input>
    )
}

export default Keypad;