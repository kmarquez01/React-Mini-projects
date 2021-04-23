
import React from "react"

import Products from "./Products"

import ProductsData from "./ProductsData"

class NewApp7 extends React.Component{

    constructor(){
        super()
        this.state = {
            prod: ProductsData
        }
    }

    render()
    {
        const productsMain = this.state.prod.map(item => <Products key = {item.id} item = {item.name} /> )

        return(
    
            <div>
    
                {productsMain}
    
            </div>
    
        )
    }
}

export default NewApp7