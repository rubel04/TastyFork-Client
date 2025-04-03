import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    const {pathname} = useLocation();
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                {pathname !== "/" && <Navbar></Navbar>}
            </header>
            <main className="flex-grow">
            <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;