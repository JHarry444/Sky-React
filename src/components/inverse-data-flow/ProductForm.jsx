import { useState } from "react";

const ProductForm = ({setter}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [nameError, setNameError] = useState("");

    const handleSubmit = function(event) {
        event.preventDefault();
        setter((products) => {
            // debugger;
            // products.push({
            //     name,
            //     price
            // }); baaaaaaaaaaaad
            // const newProducts = [];
            // for (let p of products) newProducts.push(p);
            // newProducts.push({name, price});
            // return newProducts;
            return [...products, {name, price}];
        });
    } 
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Name:</label>
        <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            name="name" 
            id="productName"
            required 
        />
        <br/>
        <label htmlFor="productPrice">Price:</label>
        <input 
            type="number"
            step={0.01} 
            value={price} 
            onChange={e => setPrice(parseFloat(e.target.value))} 
            name="price" 
            id="productPrice"
            min={0}
            required
        />
        <br/>
        <button type="submit">Add product</button>
    </form> 
    );
}
 
export default ProductForm;