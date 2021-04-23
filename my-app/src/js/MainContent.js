import React from "react"

function MainContent(){
    return (
        <section className ="showcase">
        <div className ="container grid">
            <div className ="showcase-text">
                <h1>Easier Deploy</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                   Libero magnam reiciendis pariatur facere unde et quibusdam
                   modi eos consequuntur natus quae fugit totam ipsum, a impedit 
                   ipsa magni rerum vel?
                </p>
                <a href="feature.html" className ="btn btn-outline">Read More</a>
            </div>

            <div class = "showcase-form card">
                <h2>Request a Demo</h2>
                <form>
                    <div class ="form">
                        <input type = "text" name = "name" placeholder = "Name" required></input>
                    </div>
                    <div class ="form">
                        <input type = "text" name = "company" placeholder = "Company" required></input>
                    </div>
                    <div class ="form">
                        <input type = "text" name = "email" placeholder = "Email" required></input>
                    </div>
                    <input type ="submit" value ="Send" class = "btn-primary"></input>
                </form>
            </div>
        </div>
    </section>
    )
}

export default MainContent