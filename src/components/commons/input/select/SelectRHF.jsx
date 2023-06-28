import { forwardRef } from "react";

const SelectRHF = forwardRef((props, ref) => {
  const { id, label, data, dataApi, labelWeight, selection, start, end,error, ...inputProps } = props;

  const renderSelect = (info) => (
    <option key={info} value={info} className="text-black">
      {info}
    </option>
  );

  const renderSelectApi = (info) => (
    <option key={info.value} value={info.value} className="text-black">
      {info.label}
    </option>
  );

  return (
    <div className={``}>
      {label && (
        <label
          htmlFor={id}
          className={`block mb-2 text-sm text-gray-900`}
        >
          {label}
        </label>
      )}
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 block w-full p-2.5 disabled:cursor-no-drop disabled:bg-gray-200 " 
        name={id}
        id={id}
        {...inputProps}
        ref={ref}
      >
        {selection && <option value="" disabled >Seleccionar</option>} 
        {data?.map(renderSelect)}
        {dataApi?.map(renderSelectApi)}
      </select>
      {error && <span className="text-red-500 font-bold text-xs">{error}</span>}

    </div>
  );
});

export default SelectRHF;
