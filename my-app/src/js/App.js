import React from "react"

import Navigation from "./Navigation"

import MainContent from "./MainContent"

import Footer from "./Footer"

import Home from "./Home"


function App(){

    return(
       <div>
           <Navigation />
           <Home />
           <MainContent />
           <Footer />
       </div>
    )
}

export default App