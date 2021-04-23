import React from "react"

class NewApp12 extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({loading: true})

        fetch("http://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render(){

        let wordDisplay

        if(this.state.loading === true){
            wordDisplay = "Currently loading"
        }
        else{
            wordDisplay = this.state.character.name
        }
     
        return(
            <div>
                <p>{wordDisplay}</p>
           </div>
        )
    }
}

export default NewApp12