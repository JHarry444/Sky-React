import Product from "./Product";
import PropTypes from "prop-types";
import { v4 as genKey } from "uuid"; // can't be bothered so generated a unique key

const ProductList = ({products}) => {
    return ( 
        <>
            {
                products.map(p => <Product key={genKey()} name={p.name} price={p.price}/>)
            }
        </>
     );
}

ProductList.defaultProps = {
    products: []
}
 
ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    )
}

export default ProductList;