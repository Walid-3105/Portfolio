import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
