'use client'

import { DoorOpen, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function SearchForm() {
    const { register, handleSubmit, reset } = useForm()
    const router = useRouter()
    function handleSearch(data) {
        const { searchTerm } = data;
        console.log(searchTerm)
        reset()
        router.push(`/search?search=${searchTerm}`)
    }
    return (

        <form className="flex items-center">
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <DoorOpen className='w-4 h-4 text-neutral-500 dark:text-neutral-400' />
                </div>
                <input type="text" id="voice-search" className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500" placeholder="Search Products, Categories, Markets ...." required />

            </div>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-black bg-purple-200 rounded-lg border border-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                <Search className="text-neutral-500 w-4 h-4 me-2" />Search
            </button>
        </form>

    )
}