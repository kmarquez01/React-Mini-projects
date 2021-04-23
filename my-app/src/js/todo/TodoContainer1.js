import React from "react"

import TodoComponent from "./TodoComponent"

class TodoContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            job1: "",
            completed: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target

        if(type === "checkbox"){

            this.setState({
                [name]: checked
            })
        }
        else
        {
            this.setState({
                [name]: value
            })
        }
    }

    render()
    {
        return(
            <TodoComponent 
            handleChange = {this.handleChange}
            data = {this.state}            
            />
        )
    }
}

export default TodoContainer