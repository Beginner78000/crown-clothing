import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop";
import Navbar from "../Navbar";
import SignIn from "../SignIn";

// import "./style.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
