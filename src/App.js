import React, { useState } from 'react';
// import { Elements, StripeProvider } from 'react-stripe-elements';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import items from './api/products';
import Product from './components/Product';
import Cart from './components/Cart';
// import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import './App.css';

export default function App() {
	const [ itemsInCart, setItemsInCart ] = useState([]);

	const handleAddToCartClick = (id) => {
		setItemsInCart((itemsInCart) => {
			const itemInCart = itemsInCart.find((item) => item.id === id);

			// if item is already in cart, update the quantity
			if (itemInCart) {
				return itemsInCart.map((item) => {
					if (item.id !== id) return item;
					return { ...itemInCart, quantity: item.quantity + 1 };
				});
			}

			// otherwise, add new item to cart
			const item = items.find((item) => item.id === id);
			return [ ...itemsInCart, { ...item, quantity: 1 } ];
		});
	};

	const totalCost = itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/cart">Cart</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/cart">
						<Cart itemsInCart={itemsInCart} totalCost={totalCost} />
					</Route>
					<Route path="/">
						<main className="App-shop">
							<div className="App-products">
								{items.map((item) => (
									<Product
										key={item.title}
										title={item.title}
										price={item.price}
										image={item.image}
										onAddToCartClick={() => handleAddToCartClick(item.id)}
									/>
								))}
							</div>
						</main>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
