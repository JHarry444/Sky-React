import PropTypes from "prop-types";

const TruthyFalsy = ({error}) => {
    return ( error && <p style={{color: "red"}}>THERE IS AN ERROR HERE!!!1111!!</p> );
}

TruthyFalsy.propTypes = {
    error: PropTypes.bool.isRequired
}
export default TruthyFalsy;