import { forwardRef, useEffect } from "react";

const Select = forwardRef((props, ref) => {
  const { id, label, data, labelWeight, selection, start, end, ...inputProps } = props;

  const renderSelect = (info) => (
    <option key={info} value={info} className="text-black">
      {info}
    </option>
  );
  let fontWeight = labelWeight ? labelWeight : "medium";
  const fontWeightVariants = {
    bold: "font-bold",
    medum: "font-medim",
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
      {label && (
        <label
          htmlFor={id}
          className={`block mb-2 text-sm  ${fontWeightVariants[fontWeight]} text-gray-900`}
        >
          {label}
        </label>
      )}
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 block w-full p-2.5 disabled:cursor-no-drop disabled:bg-gray-200"
        name={id}
        id={id}
        {...inputProps}
        ref={ref}
      >
        {selection && <option value="" disabled >Seleccionar</option>} 
        {data.map(renderSelect)}
      </select>
    </div>
  );
});

export default Select;
