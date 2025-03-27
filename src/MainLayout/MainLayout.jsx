import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar></Navbar>
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