import React from 'react'

import { FileDown, Search } from 'lucide-react'
export default function TabelAction() {
    return (
        <div className='flex justify-between items-center py-6 bg-neutral-700 rounded-lg gap-8 px-12'>
            <button type="button" className=" relative inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 space-x-2">
                <FileDown />
                <span>Export</span>
            </button>
            <div className=" flex-grow bg-white dark:bg-neutral-700 ">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative ">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search className='text-neutral-500' />
                    </div>
                    <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-3/4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>
            </div>
        </div>
    )
}
