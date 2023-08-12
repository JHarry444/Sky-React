import { useEffect, useState } from "react";
import HedgehogForm from "./HedgehogForm";
import HedgehogList from "./HedgehogList";
import axios from "axios";
import {API_URL} from "../../data/consts.json";

const HedgehogContainer = () => {
    const [listOfHedgehogs, setListOfHedgehogs] = useState([]);
    // runs on initial load of the component
    useEffect(() => {
        getHedgehogs();
        console.log("EFFECT: ", new Date());
    }, []);

    const getHedgehogs = async () => {
        try {
            const URL = `http://${process.env.NODE_ENV === "production" ? "/api" : "localhost:8081"}/hedgehog/getAll`;
            const response = await axios.get(URL);
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