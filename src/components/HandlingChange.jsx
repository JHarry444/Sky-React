import { useState } from "react";

const HandlingChange = () => {
    const [value, setValue] = useState("");
    // controller component
    return ( 
    <input 
    onChange={e => setValue(e.target.value)} 
    value={value} /> );
}
 
export default HandlingChange;