import { forwardRef } from "react";

const SelectEntries = forwardRef((props, ref) => {
    const { text, ...inputProps } = props;
    return (
        <div className="col-start-1 col-end-5 content-center">
            <label className="text-sm font-medium text-gray-900 dark:text-white mr-2">
                Show
            </label>
            <input
                type="number"
                id="entries"
                className="border border-gray-300 rounded-md sm:text-sm p-1 w-16"
                defaultValue={text}
            />
            <label className="text-sm font-medium text-gray-900 dark:text-white ml-1">
                entries
            </label>
        </div>
    );
});

export default SelectEntries;