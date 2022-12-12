import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import { CartContext } from '../../contexts/cart';

import './style.scss';

function CartIcon() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;