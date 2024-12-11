import React from "react";

export default function SelectInput({
    label,
    name,
    register,
    className = "col-span-1 sm:col-span-2",
    options = [],
    hasMultiple = false
}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 dark:text-white text-black mb-2 "
            >
                {label}
            </label>
            <div className="mt-2">
                <select
                    {...register(`${name}`)}
                    id={name}
                    multiple={hasMultiple}
                    name={name}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {options.map((option, i) => {
                        return (
                            <option key={i} value={option.id}>
                                {option.title || option.name}
                            </option>
                        );
                        console.log("Options for SelectInput:", options);
                    })}

                </select>
            </div>
        </div>
    );
}