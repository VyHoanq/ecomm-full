import React from 'react'
import Navbar from '../../components/frontend/navigations/Navbar'
import Footer from '../../components/frontend/layouts/Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto py-6 px-8 lg:px-0'>{children}</div>
            <Footer/>
        </div>
    )
}
