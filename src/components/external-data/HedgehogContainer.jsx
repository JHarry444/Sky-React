import { useEffect, useState } from "react";
import HedgehogForm from "./HedgehogForm";
import HedgehogList from "./HedgehogList";
import axios from "axios";

const HedgehogContainer = () => {
    const [listOfHedgehogs, setListOfHedgehogs] = useState([]);
    // runs on initial load of the component
    useEffect(() => {
        getHedgehogs();
        console.log("EFFECT: ", new Date());
    }, []);

    const getHedgehogs = async () => {
        try {
            const response = await axios.get("http://localhost:8081/hedgehog/getAll");
            setListOfHedgehogs(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    getHedgehogs();
    return ( 
        <>
            <HedgehogForm setter={getHedgehogs}/>
            <HedgehogList hedgehogs={listOfHedgehogs}/>
        </>
     );
}
 
export default HedgehogContainer;