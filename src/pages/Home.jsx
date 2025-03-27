import Banner from "../components/shared/Banner";
import TopFoods from "../components/TopFoods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section>
                <TopFoods></TopFoods>
            </section>
        </div>
    );
};

export default Home;