import React from "react"

import TodoComponent from "./TodoComponent"

import TodoData from "./TodoData"


class TodoContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: TodoData,
            error: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
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
         });

    }

    addItem(event){
        event.preventDefault();

        let value = event.target.value;
        
        
        const tasks =  {
            id: Math.random(),

            job: value,

            completed: false
        } 

        if(!value){
            this.setState({
                error: "Please enter an item."
            })
            return null
        }
        if(this.state.todos.length === 10){
            this.setState({
                error: "Todo List is full please delete an item."
            }) 
            return null
            
        }
        else{
            this.setState({
                todos: [...this.state.todos, tasks],
            })
        }
        

        console.log(this.state.todos)
    }

    removeItem(){
        
            this.state.todos.splice(0, 1)
            this.setState({
                todos: this.state.todos
            })
      
        
    }

    render()
    {
        const todoItems = this.state.todos.map(item => <TodoComponent key = {item.id} item = {item}
            handleChange = {this.handleChange}
            removeItem = {this.removeItem}
             />)

        return(
                <div className= "container">
                    <div className = "container1">
                        <h1>Todo List</h1>
                        {todoItems}
                        <div className = "bar">
                            <input type = "text" name = "job" placeholder = "Enter task" onChange = {this.handleInput}/>
                            <button type = "submit" defaultValue = "" name = "submit" value = {this.state.job} onClick = {this.addItem}>Add task</button>
                        </div>
                        <div className= "error">
                            {this.state.error}
                        </div>
                    </div>
                </div>
            )                 
    }
}

export default TodoContainer