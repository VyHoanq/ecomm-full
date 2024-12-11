import React from 'react'
import MarketCarousel from './Carousels/MarketCarousel'

export default function MarketList() {
    return (
        <div className='sm:col-span-3 sm:block bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-neutral-700 overflow-hidden shadow-md hidden '>
            <h2 className='bg-neutral-200 py-4 px-6 font-bold border-b text-center uppercase mb-6 rounded-md '>market List</h2>
            <MarketCarousel />
        </div>

    )
}
