import React from 'react';
// import { Elements, StripeProvider } from 'react-stripe-elements';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import { Provider } from "react-redux";
import { Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';
import store from "./redux/store"

export default function App() {
	// const [ itemsInCart, setItemsInCart ] = useState([]);

	// const handleAddToCartClick = (id) => {
	// 	setItemsInCart((itemsInCart) => {
	// 		const itemInCart = itemsInCart.find((item) => item.id === id);

	// 		// if item is already in cart, update the quantity
	// 		if (itemInCart) {
	// 			return itemsInCart.map((item) => {
	// 				if (item.id !== id) return item;
	// 				return { ...itemInCart, quantity: item.quantity + 1 };
	// 			});
	// 		}

	// 		// otherwise, add new item to cart
	// 		const item = items.find((item) => item.id === id);
	// 		return [ ...itemsInCart, { ...item, quantity: 1 } ];
	// 	});
	// };

	//

	return (
		<Provider store={store}>
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
							<Cart/>
						</Route>
						<Route path="/">
							<main className="App-shop">
								<Row className="h-100">
									<Product/>
								</Row>
							</main>
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

