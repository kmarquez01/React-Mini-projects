import React from "react"


function TodoComponent(props) {
    const done = {
        fontStyle: "normal",
        textDecoration: "line-through"
    }

    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }


    return (
        <form className="todo-component" >
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style = {props.item.completed ? done: null} value = {props.item.job} onChange = {() => props.handleChange(props.item.id)}>{props.item.job}</p>
            <button
                className = "rmv"
                type = "submit"
                style = {props.item.completed ? show: {display: 'none'}}
                onClick = {() => props.removeItem(props.item.id)}>
                Delete
            </button>

                
        </form>
    )
}

export default TodoComponent
