import React from 'react';
import { connect } from "react-redux"
import { removeFromCart, decrementQuantity, incrementQuantity } from "../redux/actionCreators/changeCart"
import './CartItem.css';

const CartItem = ({ title, cost, quantity, id, remove, decrement, increment }) => {
	return (
		<div className="CartItem">
			<div>{title}</div>
			<div className="CartItem-details">
				<div className="CartItem-quantity">
					<button id="minus" onClick={() => decrement(id)}>-</button>
					Qty: {quantity}
					<button id="plus" onClick={() => increment(id)}>+</button>
				</div>
				<div>${cost.toFixed(2)}</div>
				<button onClick={() => remove(id)}>Remove</button>
			</div>
		</div>
	);
}


const mapDispatchToProps = dispatch => ({
	remove(item) {
		dispatch(removeFromCart(item))
	},
	decrement(item) {
		dispatch(decrementQuantity(item))
	},
	increment(item) {
		dispatch(incrementQuantity(item))
	}
});


export default connect(null, mapDispatchToProps)(CartItem);