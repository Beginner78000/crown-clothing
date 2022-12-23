import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../../actions/user.action";

import Home from "../Home";
import Shop from "../Shop";
import Navbar from "../../Navbar";
import Authentication from "../Authentication";
import Checkout from "../Checkout";

import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";

// import "./style.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsuscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
