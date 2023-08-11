import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleChange = (e) => {
        console.log("HEY BEN!");
        setName(e.target.value);
    }
    return ( 
        <form>
            <label htmlFor="nameInput">Name:</label>
            <input type="text" value={name} onChange={handleChange()}  name="name" id="nameInput" />
            <br />
            <label htmlFor="ageInput">Age:</label>
            <input type="number" name="age" id="ageInput"  value={age} onChange={(e) => setAge(e.target.value)}/>
            <br />
            <button>Submit</button>
        </form>
     );
}
 
export default Form;