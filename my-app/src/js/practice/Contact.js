import React from "react"

function Contact(props){
    
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Phone : {props.phone}</p>
            <p>Email : {props.email}</p>
        </div>

    )
}

export default Contact