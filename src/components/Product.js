import React from 'react';
import {Card, Button, Col} from "react-bootstrap";
import { addToCart } from "../redux/actionCreators/changeCart"
import { connect } from 'react-redux';
import items from '../api/products';

const Product = ({ addItemToCart }) => {
	return (
		items.map((item) => (
			<Col xs="2" className="Product"  key={item.id}>
				<Card style={{ width: '18rem' }} className="h-100">
				<Card.Img variant="top" src={item.image} />
				<Card.Body>
					<Card.Title>
						{item.title}
					</Card.Title>
					<Card.Text>
						$ {item.price}
					</Card.Text>
					<Button variant="primary" onClick={() => addItemToCart(item.id)}>Add to cart</Button>
				</Card.Body>
			</Card>
			</Col>
		))

	)

}

// const mapStateToProps = ({ cart }) => {
// 	cart
// }

const mapDispatchToProps = dispatch => ({
	addItemToCart(item) {
		dispatch(addToCart(item))
	}
});


export default connect(null, mapDispatchToProps)(Product);