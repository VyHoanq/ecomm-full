import React from 'react'
import LoginForm from '@/components/frontend/auth/LoginForm'

export default function page() {
    return (
        <div className="h-screen flex">
            <LoginForm />
            <div className="flex w-1/2 dark:bg-white justify-around items-center bg-gradient-to-r from-neutral-200 to-neutral-600">
                <div>
                    <h1 className="text-white dark:text-black font-bold text-4xl font-sans uppercase">Limi Ecommerce</h1>
                    <p className="text-white dark:text-black mt-1">The most popular peer to peer lending at SEA</p>
                    <button type="submit" className="block w-28 bg-white dark:text-blue-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
            </div>
        </div>
    )
}
