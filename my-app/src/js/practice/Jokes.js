import React from "react"

function Jokes(props){

    let styles2 = {
        color: !props.question && "#ffffff",
        backgroundColor: "#808080",
        fontSize: 14
    }

    return(
        <div className = "container1">
            <p style = {styles2}>Question: {props.question}</p>
            <p style = {styles2}>punchline: {props.punchline}</p>   
        </div>
    )

}

export default Jokes