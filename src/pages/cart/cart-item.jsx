import React, { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { data } = props; // Destructure the data prop
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const cartItemAmount = cartItems[data.id]

    return (
        <div className="cartItem">
            <img src={data.productImage} />
            <div className="description">
                <p>  
                    <b> {data.productName} </b>
                </p>
                <p> $ {data.price} </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(data.id)}> - </button>
                    <input value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)}/>
                    <button onClick={() => addToCart(data.id)}> + </button>
                </div>
            </div>
        </div>
    )
}

// Define PropTypes for the data prop
CartItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        productImage: PropTypes.string.isRequired,
    }).isRequired,
};

export default CartItem;