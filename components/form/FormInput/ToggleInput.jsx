import React from 'react'

export default function ToggleInput({ label, name, trueTitle, falseTitle, register, className="sm:col-span-2 flex flex-col sm:flex-2 gap-2 "}) {
    return (
        <div className={className}>
            <div className='w-full'>
                <h2 className='block text-sm font-medium leading-6 dark:text-white text-black mb-2 '>{label}</h2>
            </div>
            <div className='w-full sm:w-1/2'>
                <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                        {...register(name)}
                        type='checkbox'
                        className='sr-only peer'
                    />
                    <div className='w-11 h-6 bg-neutral-400 rounded-full peer peer-checked:bg-green-500 transition-colors duration-200 ease-in-out peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[" "] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-200 after:ease-in-out'>
                    </div>
                    <span className='ml-3 text-sm font-medium text-black dark:text-white'>
                        {name ? `${trueTitle}` : `${falseTitle}`}
                    </span>
                </label>
            </div>
        </div>
    )
}
