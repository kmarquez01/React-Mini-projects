import React from "react"

function Navigation(){
    return (
        <div className ="nav">
        <div className = "container flex">
            <h1 className ="logo">Sample Web</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="docs.html">Docs</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
        </div>
    </div>
    ) 
}

export default Navigation