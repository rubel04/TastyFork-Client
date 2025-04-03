import Gallery from "./Gallery";
import Offers from "../components/Offers";
import Banner from "../components/shared/Banner";
import ContactSection from "../components/shared/Reviews";
import TopFoods from "../components/TopFoods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section>
                <TopFoods></TopFoods>
            </section>
            <section>
                <Gallery></Gallery>
            </section>
            <section>
                <Offers></Offers>
            </section>
            <section>
                <ContactSection></ContactSection>
            </section>
        </div>
    );
};

export default Home;