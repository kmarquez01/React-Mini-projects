import React from "react"

function FormComponent(props){
    return(
        <main>
            <form>
                <input type = "text" placeholder = "First Name" name = "firstName" value = {props.data.firstName} onChange = {props.handleChange}/><br />
                <input type = "text" placeholder = "Last Name" name = "lastName" value = {props.data.lastName} onChange = {props.handleChange} /><br />
                <input type = "number" placeholder = "Age" name = "age" value = {props.data.age} onChange = {props.handleChange}/><br />
    
                <input type = "radio" name = "gender" value = "male"  checked = {props.data.gender === "male"} onChange = {props.handleChange} />Male
                <input type = "radio" name = "gender" value = "female"  checked = {props.data.gender === "female"} onChange ={props.handleChange} />Female
                <br />
                <select value = {props.data.location} name = "location" onChange = {props.handleChange}>
                    <option value = "">--- Choose a location ---</option>
                    <option value = "Kyoto">Kyoto</option>
                    <option value = "Sendai">Sendai</option>
                    <option value = "Tokyo">Tokyo</option>
                </select>
                <br />
    
                <button>Submit</button>
                <br />
    
                <hr />
                <h2>Entered Information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your location: {props.data.location}</p>
            </form>
        </main>
    )
}

export default FormComponent