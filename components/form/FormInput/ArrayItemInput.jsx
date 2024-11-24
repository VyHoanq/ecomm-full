'use client'
import React, { useState } from 'react'
import { CirclePlusIcon, PlusSquare, XOctagon } from 'lucide-react'

export default function ArrayItemInput({ setItems, items = [], itemTitle }) {
    // Tags
    const [item, setItem] = useState("")
    const [showTagForm, setShowTagForm] = useState(false)
    function addItem(item) {
        if(!item) return ;
        setItems([...items, item])
        setItem("")
    }
    function removeItem(index) {
        const newItems = [...items]
        newItems.splice(newItems.indexOf(index), 1)
        setItems(newItems)
    }
    // End Tags
    return (
        <div className='sm:col-span-2 '>
            {
                showTagForm ? (
                    <div className="flex items-center gap-2">
                        <div className="relative w-full">
                            <input value={item} onChange={(e) => setItem(e.target.value)} type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Create a ${itemTitle}...`} required />
                        </div>
                        <button onClick={() => addItem(item)} type="button" className="shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm  dark:bg-neutral-600 dark:text-white rounded-lg  hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-neutral-300 bg-neutral-300 text-neutral-900 dark:hover:bg-neutral-800 dark:focus:ring-neutral-800 font-semibold">
                            <CirclePlusIcon className='w-4 h-4 me-2' />
                            Add
                        </button>
                        <button
                            onClick={() => setShowTagForm(false)}
                            className='w-8 h-8 shrink-0 ml-3 bg-red-700 rounded-xl flex items-center justify-center'>
                            <XOctagon className='w-4 h-4' />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowTagForm(true)}
                        type='button' className='flex items-center gap-2 rounded-md py-3 px-2 text-gray-900 dark:bg-transparent dark:text-white'>
                        <PlusSquare />
                        <span>Add {itemTitle}</span>
                    </button>
                )
            }
            <div className='flex flex-wrap gap-8 mt-4'>
                {
                    items.map((item, i) => (
                        <div onClick={() => removeItem(i)} key={i} className='dark:bg-neutral-300 bg-neutral-100 text-neutral-900 flex space-x-2 py-2 px-4 rounded-md items-center cursor-pointer'>
                            <p>{item}</p>
                            <button>
                                <XOctagon className='w-4 h-4' />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
