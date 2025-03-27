const Button_Primary = (props) => {
    const {text, type} = props || {};
    return <button className={`${type == "lg" && "px-8"} text-xl text-center font-medium text-white py-3 px-6 cursor-pointer my-2 rounded bg-green-600 hover:bg-green-700 transition`}>{text}</button>
};

export default Button_Primary;