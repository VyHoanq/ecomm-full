"use client";
export default function TextAreaInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    className = "col-span-1 sm:col-span-2",
}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 dark:text-white text-black mb-2  "
            >
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    {...register(`${name}`, { required: isRequired })}
                    name={name}
                    id={name}
                    rows={3}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-400 dark:focus:ring-neutral-50 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-white"
                    defaultValue={""}  placeholder={`Type the ${label.toLowerCase()}`}
                />
                {errors[`${name}`] && (
                    <span className="text-sm text-red-600 ">{label} is required</span>
                )}
            </div>
        </div>
    );
}