import items from '../../api/products';

export default function(state = [], action) {
    if (action.type === "ADD_TO_CART") {
        const id = action.payload;
        const product = state.find(item => item.id === id);
        if (product){
            return state.map((item) => {
                if (item.id !== id) return item;
                return { ...product, quantity: item.quantity + 1}
            })
        }
        const item = items.find((item) => item.id === id);
        return [ ...state, { ...item, quantity: 1 }]
    } else if (action.type === "REMOVE_FROM_CART") {
        return state.filter(item => item.id !== action.payload)
    } else if (action.type === "DECREMENT_FROM_CART") {
        const id = action.payload;
        const product = state.find(item => item.id === id);
        if (product){
            return state.map((item) => {
                if (item.id !== id) return item;
                return { ...product, quantity: item.quantity - 1}
            })
        }
    } else if (action.type === "INCREMENT_FROM_CART") {
        const id = action.payload;
        const product = state.find(item => item.id === id);
        if (product){
            return state.map((item) => {
                if (item.id !== id) return item;
                return { ...product, quantity: item.quantity + 1}
            })
        }
    } else {
        return state;
    }
}