import Lottie from 'lottie-react';
import errorImg from "../assets/404.json"
import { Link } from 'react-router-dom';
import Button_Secondary from '../components/shared/Button_Secondary';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <Lottie animationData={errorImg}></Lottie>
            <Link to='/'><Button_Secondary text="Return Home"></Button_Secondary></Link>
        </div>
    );
};

export default ErrorPage;