import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Input = (props) => {
  const { type, name, label, placeholder,defaultValue,disabled,readOnly } = props || {};
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <label className="text-sm">{label}{label ? "*" : "" }</label>
      <br />
      <input
        className={`${theme === "dark" ? "" : "bg-gray-100"} w-full  p-2 md:p-3 border border-gray-200 placeholder:text-[13px] placeholder:pl-2 my-2 rounded`}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        readOnly={readOnly}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
