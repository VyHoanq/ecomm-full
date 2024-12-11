import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './Carousels/CategoryCarousel'

export default function CategoryList() {
    return (
        <div className='sm:col-span-3 sm:block bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-neutral-700 overflow-hidden shadow-md hidden mt-6'>
            <div className='flex justify-between items-center rounded-md '>
                <h2 className='bg-neutral-200 py-4 px-6 font-bold border-b text-center uppercase mb-2'>Category List</h2>
                <Link className='rounded-md px-4 py-2 bg-neutral-100 mr-3 hover:bg-neutral-400 font-semibold' href="#">See All</Link>
            </div>
            <div className='bg-neutral-100 p-4'>
                <CategoryCarousel />
            </div>
        </div>
    )
}
