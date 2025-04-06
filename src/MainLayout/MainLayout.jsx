import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import Loader from "../components/shared/Loader"

const MainLayout = () => {
  const { pathname } = useLocation();
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="flex flex-col min-h-screen font-luxurious">
          <header>{pathname !== "/" && <Navbar></Navbar>}</header>
          <main className="flex-grow">
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      )}
    </>
  );
};

export default MainLayout;
