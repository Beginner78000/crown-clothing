import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from '../CartIcon';
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../selectors/user.selector"
import { signOut } from "../../actions/user.action";
import { resetCartItem } from "../../actions/cart.action";

import { selectIsCartOpen } from "../../selectors/cart.selector";
import { signOutUser } from "../../utils/firebase";

import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  // console.log(currentUser);

  const logout = () => {
    signOutUser();
    dispatch(signOut());
    dispatch(resetCartItem());
    navigate('/');
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={logout}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
