import React from "react"

function TodoItem(props){

    const styles1 = {
        color: "#ffffff" ,
        backgroundColor: "#000000",
        fontSize: 14
    }

    return(

    <div className = "container1" style = {styles1}>
                
        <input type = "checkbox" checked = {props.item.completed} onChange = {() => props.handleChange(props.item.id)} />
        
        <p>{props.item.job}</p>

    </div>    
    )
}

export default TodoItem