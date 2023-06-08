import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, id, label, ...inputProps } = props;
  return (
    <div className="">
      <label htmlFor={id} className="block mb-2 text-sm font-semibold text-gray-900">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 block w-full p-2.5 disabled:cursor-no-drop disabled:bg-gray-200"
        type={type}
        name={id}
        id={id}
        {...inputProps}
        ref={ref}
      />
    </div>
  );
});

export default Input;
