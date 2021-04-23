import React from "react"

import Jokes from "./Jokes"

import jokesData from "./jokesData"

function NewApp2(){

    const jokesMain = jokesData.map(joke => <Jokes key ={joke.id} question ={joke.question} punchline = {joke.punchline} /> )

    return(
        <div className = "containermain">
            
            {jokesMain}

        </div>
    )
}

export default NewApp2