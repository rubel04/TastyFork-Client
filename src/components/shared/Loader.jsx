import Lottie from "lottie-react";
import loader from '../../assets/loader.json'
const Loader = () => {
    return (
        <div className="w-24 md:w-52 min-h-screen flex items-center mx-auto">
            <Lottie animationData={loader}></Lottie>
        </div>
    );
};

export default Loader;