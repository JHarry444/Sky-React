import PropTypes from "prop-types";


const Product = ({name, price}) => {
    return ( 
        <>
            <p>{`Name: ${name}`}</p>
            <p>{`Price: ${price}`}</p>
        </>
     );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
 
export default Product;