import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
