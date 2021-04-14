import React from "react"

function TodoComponent(props) {
    return (
        <form className="todo-component" >
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p value = {props.item.job} onChange = {() => props.handleChange(props.item.id)}>{props.item.job}</p>
        </form>
    )
}

export default TodoComponent
