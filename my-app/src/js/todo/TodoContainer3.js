import React from "react"

import TodoComponent from "./TodoComponent"


class TodoContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [ {
                id: 1,
                job: "Learn React",
                completed: false
            } ]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target

        if(type === value){
            this.setState({
                [name]: value
            })
        }
        else{
            this.setState({
                [name]: checked
            })
        }
        
    }


    addItem(event){
        event.preventDefault();

        const tasks = {
            id: Math.random(),

            job: "",

            completed: false
        } 
        
        
        this.setState({
            todos: [...this.state.todos, tasks]
           
        })

        console.log(this.state.todos)
    }

    render()
    {
 

        return(
            <div className= "container">
                {this.state.todos.job}
                <input type = "text" name = "job" placeholder = "Enter task" onChange = {this.handleChange}/>
                <button type = "submit" name = "submit" onClick = {this.addItem}>Add task</button>
            </div>
            )  
                
    }
}

export default TodoContainer