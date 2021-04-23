import React from "react"

import Conditional from "./Conditional"


class NewApp10 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }



    componentDidMount() {
        //First insert of the code being "born"
        //Insert API data here to be runned once so the program can reference it in the future
        setTimeout( () => {
            this.setState( {
                isLoading: false
            })
        }, 1500)
    }

    //getSnapshotBeforeUpdate(){
        //Create a backup of the current way things are
   // }

    //shouldComponentUpdate(nextProps, nextState){
        //return true if we want it to update
        //return false if we do not want it to update
    //}

    //componentWillUnmount() {
        //teardown or cleanup your code before your component disappears
        //eg. remove event listeners
   // }

    render(){
        return(
            <div>
                {
                this.state.isLoading ?
                
                    <h1>Loading...</h1> :
                
                    <Conditional />
                }
            </div>
        )
    }
}

export default NewApp10