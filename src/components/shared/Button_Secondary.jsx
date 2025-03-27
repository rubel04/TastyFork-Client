const Button_Secondary = (props) => {
    const {text, type} = props || {};
    return <button className={`${type == "lg" && "px-8"} text-xl text-center font-medium w-full hover:text-white py-3 px-6 cursor-pointer my-2 hover:bg-sky-900 border border-sky-900 transition rounded-full`}>{text}</button>
};

export default Button_Secondary;