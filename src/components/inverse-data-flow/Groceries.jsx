import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Groceries = () => {
    const [listOfProducts, setListOfProducts] = useState([]);

    return ( 
        <>
            <ProductForm setter={setListOfProducts}/>
            <ProductList products={listOfProducts}/>
        </>
     );
}
 
export default Groceries;