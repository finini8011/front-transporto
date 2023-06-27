import { forwardRef, useState } from "react";

const Input = forwardRef((props, ref) => {
  const {
    type,
    id,
    label,
    labelWeight,
    start,
    end,
    onChange,
    hidden,
    error,
    value,
    ...inputProps
  } = props;
  let fontWeight = labelWeight ? labelWeight : "medium";
  const fontWeightVariants = {
    bold: "font-bold",
    medium: "font-medium",
  };

  const colsVariantsStart = {
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
  };

  const colsVariantsEnd = {
    1: "col-end-",
    2: "col-end-2",
    3: "col-end-3",
    4: "col-end-4",
    5: "col-end-5",
    6: "col-end-6",
    7: "col-end-7",
  };

  return (
    <div className={`${colsVariantsStart[start]} ${colsVariantsEnd[end]}`}>
      <label
        htmlFor={id}
        className={`block mb-2 text-sm  ${fontWeightVariants[fontWeight]} text-gray-900`}
      >
        {label}
      </label>
      <input
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 w-full p-2.5 disabled:cursor-no-drop disabled:bg-gray-200 read-only:bg-gray-200 read-only:cursor-no-drop ${
          hidden && "hidden"
        }`}
        type={type}
        name={id}
        id={id}
        value={value}
        {...inputProps}
        ref={ref}
      />
        {error && <span className="text-red-500 font-bold text-xs">{error}</span>}
    </div>
  );
});

export default Input;
