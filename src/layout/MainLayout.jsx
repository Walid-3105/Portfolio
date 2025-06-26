import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
