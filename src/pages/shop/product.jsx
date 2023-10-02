import React, { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { data } = props; // Destructure the data prop
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[data.id]

    // Render the component content here
    return (
        <div className="product">
            <img src={data.productImage} alt={data.productName} />
            <div className="description">
                <p><b>Product Name: {data.productName}</b></p>
                <p>Price: $ {data.price}</p>
                <p>In Stock: {data.quantity}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(data.id)}>
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
        </div>
    );
};
// Define PropTypes for the data prop
Product.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        productImage: PropTypes.string.isRequired,
    }).isRequired,
};

export default Product;