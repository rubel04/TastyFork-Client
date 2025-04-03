const Button_Primary = (props) => {
    const {text, type} = props || {};
    return <button className={`${type == "lg" && "px-8"} text-xl text-center font-medium text-white py-1.5 md:py-3 px-4 md:px-6 cursor-pointer my-2 rounded bg-amber-500 hover:bg-amber-400 transition`}>{text}</button>
};

export default Button_Primary;