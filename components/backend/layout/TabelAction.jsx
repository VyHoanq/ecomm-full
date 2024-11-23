import React from 'react';
import { FileDown, Search, TrashIcon } from 'lucide-react';

export default function TabelAction() {
  return (
    <div className="flex items-center justify-between py-4 px-4 dark:bg-neutral-700 rounded-lg gap-4">
      {/* Export Button */}
      <button
        type="button"
        className="flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 space-x-2"
      >
        <FileDown className="w-5 h-5" />
        <span className="hidden sm:inline">Export</span>
      </button>

      {/* Search Bar */}
      <div className="relative flex-grow max-w-[200px] sm:max-w-[300px]">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="text-neutral-500" />
        </div>
        <input
          type="text"
          id="table-search"
          className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>

      {/* Delete Button */}
      <button
        type="button"
        className="flex items-center gap-2 text-red-500 bg-red-700/10 hover:bg-red-500/20 px-3 py-2 rounded-lg hover:text-red-200 transition-all duration-300"
      >
        <TrashIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Delete</span>
      </button>
    </div>
  );
}
