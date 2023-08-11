import { useState } from "react";

const Counter = () => {
    // the useState hook
    const [count, setCount] = useState(4494);
    return ( 
        <>
            <input value={count} readOnly/>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
     );
}
 
export default Counter;