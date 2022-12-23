export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const SET_IS_CART_OPEN = 'SET_IS_CART_OPEN';
export const SET_CART_COUNT = 'SET_CART_COUNT';
export const SET_CART_TOTAL = 'SET_CART_TOTAL';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

export const setCartItems = (newCartItems) => ({
    type: SET_CART_ITEMS,
    newCartItems,
});

export const setIsCartOpen = (boolean) => ({
    type: SET_IS_CART_OPEN,
    payload: boolean,
});


const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return {
        type: SET_CART_ITEMS,
        newCartItems,
    };
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return {
        type: SET_CART_ITEMS,
        newCartItems,
    };
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return {
        type: SET_CART_ITEMS,
        newCartItems,
    };
};
