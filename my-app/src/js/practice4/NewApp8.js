import React from "react"

function handleClick(){
    console.log("I was clicked!")
}

function hvrMouse(){
    console.log("I was hovered")
}

function NewApp8() {
    return(
        <div class = "me">
            <img src = "images/_DSC1400.jpg" alt="me1" onMouseOver = {hvrMouse}/>
            <br />
            <br />
            <button onClick = {handleClick}>Click me!</button>
        </div>
    )
}

export default NewApp8 