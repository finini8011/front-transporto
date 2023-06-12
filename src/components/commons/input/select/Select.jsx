import { forwardRef } from "react";

const Select = forwardRef((props, ref) => {
  const { id, label, data, selection, ...inputProps } = props;

  const renderSelect = (info) => (
    <option key={info} value={info} className="text-black">
      {info}
    </option>
  );

  return (
    <div className="">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-semibold text-gray-900"
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
