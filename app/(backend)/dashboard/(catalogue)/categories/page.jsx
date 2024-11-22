import Heading from '@/components/backend/layout/Heading'
import { PlusSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <Heading title="Categories" />
        <Link href="/dashboard/categories/new" className='flex items-center space-x-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:focus:ring-teal-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
          <PlusSquare />
          <span>New Category</span>
        </Link>
      </div>
      {/* Table */}
      <h1>Categories</h1>
    </div>
  )
}
