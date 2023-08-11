import PropTypes from "prop-types";


const Hedgehog = ({name, age, colour}) => {
    return ( 
        <>
            <p>{`Name: ${name}`}</p>
            <p>{`Age: ${age}`}</p>
            <p>{`Colour: ${colour}`}</p>
        </>
     );
}

Hedgehog.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    colour: PropTypes.string.isRequired
}
 
export default Hedgehog;