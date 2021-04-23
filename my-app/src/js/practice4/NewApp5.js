import React from "react"

class NewApp5 extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            name: "Bob",
            age: "18"
        }
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }

}

export default NewApp5
