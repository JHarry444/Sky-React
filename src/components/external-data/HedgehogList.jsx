import Hedgehog from "./Hedgehog";
import PropTypes from "prop-types";
import { v4 as genKey } from "uuid"; // can't be bothered so generated a unique key

const HedgehogList = ({hedgehogs}) => {
    return ( 
        <>
            {
                hedgehogs.map(({name, age, colour}) => (
                    <Hedgehog
                         key={genKey()}
                         name={name} 
                         age={age}
                         colour={colour}/>
                ))
            }
        </>
     );
}

HedgehogList.defaultProps = {
    products: []
}
 
HedgehogList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            colour: PropTypes.string.isRequired,
        })
    )
}

export default HedgehogList;