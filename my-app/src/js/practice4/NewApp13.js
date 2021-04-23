import React from "react"

class NewApp13 extends React.Component{
    constructor()
    {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        if(type === "checkbox")
        {
            this.setState({
                //[event.target.name]: event.target.value
                [name]: checked
            })
        }
        else
        {
            this.setState({
                //[event.target.name]: event.target.value
                [name]: value
            })
        }
    }

    render()
    {
        return(
            <form>
                <input type = "text" 
                name = "firstName" 
                value = {this.state.firstName}
                placeholder = "First Name" 
                onChange = {this.handleChange}>
                </input>

                <br></br>

                <input type = "text" 
                name = "lastName" 
                value = {this.state.lastName}
                placeholder = "Last Name" 
                onChange = {this.handleChange}>
                </input>

                <h1>{this.state.firstName} {this.state.lastName}</h1>

                <label>
                    <input type = "checkbox" 
                    name = "isFriendly" 
                    checked = {this.state.isFriendly} 
                    onChange = {this.handleChange} 
                    />is Friendly?
                </label>

                <label>
                    <input type = "radio" 
                    name = "gender" 
                    value = "male" 
                    checked = {this.state.gender === "male"} 
                    onChange = {this.handleChange} 
                    />Male
                </label>

                <label>
                    <input type = "radio" 
                    name = "gender" 
                    value = "female" 
                    checked = {this.state.gender === "female"} 
                    onChange = {this.handleChange} 
                    />Female
                </label>

                <h2>You are {this.state.gender}</h2>
            </form>           

        )
    }
}

export default NewApp13