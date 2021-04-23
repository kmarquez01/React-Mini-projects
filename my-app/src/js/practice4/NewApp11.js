import React from "react"

class NewApp11 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render()
    {
        let buttonDisplay
        let wordDisplay

        if(this.state.isLoggedIn === true)
        {
            wordDisplay = "Logged In"
            buttonDisplay = "LOG OUT"
        }
        else
        {
            wordDisplay = "Logged Out"
            buttonDisplay = "LOG IN"
        }
        return(
            <div>
                <h1>{wordDisplay}</h1>
                <button onClick = {this.handleClick}>{buttonDisplay}</button>
            </div>
        )
    }
}

export default NewApp11