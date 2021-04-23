import React from "react"

import Products from "./Products"

import ProductsData from "./ProductsData"

function NewApp3(){

    const productsMain = ProductsData.map(item => <Products key = {item.id} item = {item.name} /> )

    return(

        <div>

            {productsMain}

        </div>

    )
}

export default NewApp3