import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import CartItem from '../CartItem';
import { selectCartItems } from '../../selectors/cart.selector';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cartDropdown.styles';

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;