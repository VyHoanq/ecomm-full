import RegisterForm from '@/components/frontend/auth/RegisterForm'
import React from 'react'

export default function page() {
    return (
        <div className="h-screen flex">
            <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans uppercase">Limi Ecommerce</h1>
                    <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
            </div>
            <RegisterForm role="FARMER" />
        </div>
    )
}
