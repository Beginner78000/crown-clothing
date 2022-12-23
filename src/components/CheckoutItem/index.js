import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';

import {
    clearItemFromCart,
    addItemToCart,
    removeItemToCart,
} from "../../actions/cart.action"

import { selectCartItems } from '../../selectors/cart.selector';

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkoutItem.styles';

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const isCartOpen = useSelector(selectIsCartOpen);
  
    const clearItemHandler = () =>
      dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
      dispatch(removeItemToCart(cartItems, cartItem));

      // useEffect(() => {
      //   dispatch(setIsCartOpen(!isCartOpen));
      // }, []);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> {price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;