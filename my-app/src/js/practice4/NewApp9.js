import React from "react"

class NewApp9 extends React.Component{

    constructor(){
        super()
        this.state = {
            count: 0,
            count1: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.anotherClick = this.anotherClick.bind(this)
    }

    handleClick(){
        console.log("I was clicked!")
        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    anotherClick(){
        console.log("I was clicked!")
        this.setState(otherState => {
            return{
                count1: otherState.count1 + 2
            }
        })
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.count1}</h1>
                <button onClick = {this.handleClick}>Count iterator!</button>
                <button onClick = {this.anotherClick}>Count doubled</button>
            </div>
        )
    }
}

export default NewApp9