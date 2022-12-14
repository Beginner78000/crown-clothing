import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import { CartContext } from '../../contexts/cart';

import { CartIconContainer, ItemCount } from './cartIcon.styles';

function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
          <ShoppingIcon className='shopping-icon' />
          <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
      );
}

export default CartIcon;