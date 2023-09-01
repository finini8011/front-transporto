import { forwardRef } from "react";

const TextAreaRHF = forwardRef((props, ref) => {
  const { type, id, label, hidden, ...inputProps } = props;
 
  return (
     <div className=""> 
      <label
        htmlFor={id}
        className={`block mb-2 text-sm text-gray-900`}
      >
        {label}
      </label>
      <textarea
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 w-full p-2.5 disabled:cursor-no-drop disabled:bg-gray-200 read-only:bg-gray-200 read-only:cursor-no-drop min-h-[10rem] ${hidden && "hidden"}`}
        type={type}
        name={id}
        id={id}
        {...inputProps}
        ref={ref}
        placeholder="Ingresar campo.."
      ></textarea>
    </div>
  );
});

export default TextAreaRHF;
