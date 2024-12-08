import React from 'react'
import Navbar from '../../components/frontend/navigations/Navbar'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>{children}</div>
        </div>
    )
}
