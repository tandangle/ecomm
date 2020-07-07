import React from 'react';
import CartItem from './CartItem';
import { connect } from "react-redux";
import './Cart.css';



const Cart = (props) => {

	const itemsInCart = props.state.cart;

	console.log(props);

	const totalCost = itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	
	return (
		<div className="Cart">
			<h2 className="Cart-title">Your shopping cart</h2>
			{itemsInCart.length > 0 ? (
				<div>
					{itemsInCart.map((item) => (
						<CartItem
							key={item.id}
							title={item.title}
							cost={item.price * item.quantity}
							quantity={item.quantity}
							id={item.id}
						/>
					))}
					<div className="Cart-total-cost">Total cost: ${totalCost.toFixed(2)}</div>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	);
}

const mapStateToProps = state => ({
	state
})


export default connect(mapStateToProps)(Cart)