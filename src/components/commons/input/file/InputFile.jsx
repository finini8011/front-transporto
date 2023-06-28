import { forwardRef, useState } from "react";

const InputFile = forwardRef((props, ref) => {
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
    <div
      className={`${colsVariantsStart[start]} ${colsVariantsEnd[end]} w-full`}
    >
      <label
        htmlFor={id}
        className={`block mb-2 text-sm  ${fontWeightVariants[fontWeight]} text-gray-900`}
      >
        {label}
      </label>

      <div className="flex">
        <input
          type="text"
          className="pl-4 pr-12 py-2 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Ingrese texto"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg cursor-pointer">
          Buscar
        </button>
      </div>

      {error && <span className="text-red-500 font-bold text-xs">{error}</span>}
    </div>
  );
});

export default InputFile;
