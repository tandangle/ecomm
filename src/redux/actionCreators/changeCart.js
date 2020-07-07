const addToCart = (item) => {
    return { 
        type: "ADD_TO_CART", 
        payload: item }
}

const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: item
    }
}

const decrementQuantity = (item) => {
    return {
        type: "DECREMENT_FROM_CART",
        payload: item
    }
}

const incrementQuantity = (item) => {
    return {
        type: "INCREMENT_FROM_CART",
        payload: item
    }
}

export { addToCart, removeFromCart, decrementQuantity, incrementQuantity }