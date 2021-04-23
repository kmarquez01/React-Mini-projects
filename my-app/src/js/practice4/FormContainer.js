import React from "react"

import FormComponent from "./FormComponent"

class FormContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){

        const {name, value, type, checked} = event.target
        if(type === "checkbox")
        {
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

    render(){

        return(
        <FormComponent 
            handleChange = {this.handleChange}
            data = {this.state}
        />
        )
    }
}

export default FormContainer