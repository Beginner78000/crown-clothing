import {
    SET_CART_ITEMS,
    SET_IS_CART_OPEN,
    RESET_CART_ITEM,
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
        case RESET_CART_ITEM:
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};

export default cartReducer;
