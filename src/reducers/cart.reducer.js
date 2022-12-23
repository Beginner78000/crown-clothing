import {
    SET_CART_ITEMS,
    SET_IS_CART_OPEN,
} from "../actions/cart.action";

const initialState = {
    isCartOpen: false,
    cartItems: [],
};

const cartReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case SET_CART_ITEMS: 
            return {
                ...state,
                cartItems: action.newCartItems,
            }
        case SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: action.payload,
            }
        default:
            return state;
    }
};

export default cartReducer;
