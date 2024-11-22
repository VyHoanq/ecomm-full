import Heading from '@/components/backend/layout/Heading'
import PageHeader from '@/components/backend/layout/PageHeader'
import { Search } from 'lucide-react'

import React from 'react'

export default function page() {
  return (
    <div>
      <PageHeader heading="Categories" linkTitle="New Category" href="/dashboard/categories/new" />
      {/* Table Actions */}
      {/* Export || Delete || Edit || Search */}
      <div className='flex justify-between items-center py-6 px-8 bg-neutral-700 rounded-lg'>
        <button>Export</button>
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className='text-neutral-500' />
            </div>
            <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
          </div>
        </div>
      </div>
      <h1>Categories</h1>
    </div>
  )
}
