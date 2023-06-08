import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, id, label, ...inputProps } = props;
  return (
    <div className="mt-2 w-full">
      {label ? (
        <label htmlFor={id} className="text-gray-200 italic ml-2">
          {label}
          <input
            className="w-full bg-input p-2 px-4 outline-none rounded-md text-sky-800 mt-2 border border-sky-800"
            type={type}
            id={id}
            {...inputProps}
            ref={ref}
          />
        </label>
      ) : (
        <input
          className="w-full bg-input p-2 px-4 outline-none rounded-md text-sky-800 mt-2 border border-sky-800"
          type={type}
          id={id}
          {...inputProps}
          ref={ref}
        />
      )}
    </div>
  );
});

export default Input;
