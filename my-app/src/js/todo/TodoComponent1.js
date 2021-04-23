import React from "react"

function TodoComponent(props){
    return(
        <form className = "container">
            <input type = "checkbox" name = "completed" checked = {props.data.completed} onChange = {props.handleChange} />
            <input type = "text" name = "job1" placeholder = "Enter first task" value = {props.data.job1} onChange = {props.handleChange} />
            
        </form>
    )
}

export default TodoComponent