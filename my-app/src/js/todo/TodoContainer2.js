import React from "react"

import TodoComponent from "./TodoComponent"

import TodoData from "./TodoData"

class TodoContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(id){
        this.setState(otherState => {
                const newT = otherState.todos.map(todo => {
                    if (todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            return {
                todos: newT
            }
        })
    }

    handleInput(event){
       
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    addItem(event){
        event.preventDefault();

        
        const tasks =  {
            id: Math.random(),

            job: event.target.value,

            completed: false
        } 
        
        this.setState({
            todos: [...this.state.todos, tasks]
           
        })

        console.log(this.state.todos)
    }

    render()
    {
        const todoItems = this.state.todos.map(item => <TodoComponent key = {item.id} item = {item}
            handleChange = {this.handleChange}
             />)

        return(
            <div className= "container">
                {todoItems}
                <input type = "text" name = "job" placeholder = "Enter task" onChange = {this.handleInput}/>
                <button type = "submit" name = "submit" value = {this.state.job} onClick = {this.addItem}>Add task</button>
            </div>
            )  
                
    }
}

export default TodoContainer