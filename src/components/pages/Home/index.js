import { Outlet } from "react-router-dom";

import Categories from "../../Categories";

// import "./style.scss";

function Home() {
  return (
    <div>
        <Outlet />
        <Categories />
    </div>
  );
}

export default Home;
