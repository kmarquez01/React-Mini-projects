import React from "react"

import Header from "./Header"

import Greeting from "./Greeting"

class NewApp4 extends React.Component
{
    constructor()
    {
        super() /* essentially uses super class in react.component (rule of thumb always add super to constructor) */
        this.state = 
        {
            answer: "Yes"
        }
    }
    render() 
    {
        return(
            <div>
                <Header username = "Death" />
                <Greeting />
                <h2>Is state important? {this.state.answer}</h2>
            </div>
        )
    }

}

export default NewApp4
