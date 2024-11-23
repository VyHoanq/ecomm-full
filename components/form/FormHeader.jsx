import React from 'react'
import { XCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'


export default function FormHeader({ title }) {
    const router = useRouter()
    return (
        <>
            <div className='flex items-center justify-between py-6 px-12 bg-neutral-50 rounded-lg dark:bg-neutral-700 text-black dark:text-white shadow-lg mb-10'>
                {/* Database : id, title, slug, description, image */}
                <h1 className='text-xl font-bold'>New {title}</h1>
                <button onClick={() => router.back()}>
                    <XCircleIcon />
                </button>
            </div>
        </>
    )
}
