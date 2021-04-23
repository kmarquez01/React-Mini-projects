import React from "react"

function Footer(){

    const firstN = "Kirby";
    const lastN = "Marquez";
    const date = new Date(2021, 3, 3, 19);
    const hours = date.getHours()
    let timeofDay

    const styles = {

        color: "#ffffff" ,
        backgroundColor: "#000000",
        fontSize: 14
    }

    if (hours < 12){
        timeofDay = "morning";
        styles.color = "#000000";
        styles.backgroundColor = "#ffffff";
    }
    else if (hours >= 12 && hours < 17){
        timeofDay = "afternoon"
    }
    else{
        timeofDay = "night"
        styles.color = "#ffffff"
        styles.backgroundColor = "#808080"

    }

    return (
        <div>
            <footer style = {styles}>This is a footer made by {`${firstN } ${lastN}`}</footer>
        </div>


    )
}

export default Footer