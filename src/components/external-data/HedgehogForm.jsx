import axios from "axios";
import { useState } from "react";

const HedgehogForm = ({setter}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [colour, setColour] = useState("");

    const handleSubmit = async function(event) {
        event.preventDefault();
        try {
        await axios.post("http://localhost:8081/hedgehog/create", {
            name, age, colour
        });

        await setter();
    } catch (err) {
        console.error(err);
    }

    } 
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="hedgehogName">Name:</label>
        <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            name="name" 
            id="hedgehogName"
            required 
        />
        <br/>
        <label htmlFor="hedgehogPrice">Price:</label>
        <input 
            type="number"
            value={age} 
            onChange={e => setAge(parseInt(e.target.value))} 
            name="price" 
            id="hedgehogPrice"
            min={0}
            required
        />
        <br/>
        <label htmlFor="hedgehogColour">Colour:</label>
        <input 
            type="text" 
            value={colour} 
            onChange={e => setColour(e.target.value)} 
            name="colour" 
            id="hedgehogColour"
            required 
        />
        <br/>
        <button type="submit">Add hedgehog</button>
    </form> 
    );
}
 
export default HedgehogForm;