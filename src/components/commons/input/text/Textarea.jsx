import { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => {
  const { id, label, col, ...inputProps } = props;
  return (
    <div className={col}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-gray-900"
      >
        {label}
      </label>
      <textarea
        className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 block w-full p-2.5"
        name={id}
        id={id}
        {...inputProps}
        ref={ref}
      />
    </div>
  );
});

export default Textarea;
