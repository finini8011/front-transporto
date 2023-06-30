import { forwardRef } from "react";

const InputNumberCount = forwardRef((props, ref) => {
  const { id,text, size, ...inputProps } = props;
  return (
    <div className="flex gap-2 items-center">
      <div className={`flex-1 rounded-xl border border-gray-300 py-2 px-4 ${size ? size : "text-xs"}`}>
        {text}
      </div>
      <div className="w-20 ">
        <input
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none  w-full py-2 disabled:cursor-no-drop disabled:bg-gray-200 text-center`}
          type="number"
          min={0}
          name={id}
          id={id}
          {...inputProps}
          ref={ref}
        />
      </div>
    </div>
  );
});

export default InputNumberCount;
