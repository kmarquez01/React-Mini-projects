import React from "react"

import TodoData from "./TodoData"

import TodoItem from "./TodoItem"

class NewApp0 extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(otherState => {
                const updatedTodos = otherState.todos.map(todo => {
                    if (todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            return {
                todos: updatedTodos
            }
        })
        console.log("Changed", id)
    }
    render()
    {
        const todoMain = this.state.todos.map(item => <TodoItem key ={item.id} job ={item.job} completed = {item.completed}/> )
    
        return(
            <div className = "container0">
                {todoMain}
            </div>
        )
    }
}

export default NewApp0