import React from 'react'
import SearchForm from '../forms/SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import { ShoppingBasket, UserCircle2 } from 'lucide-react'
import HelpModal from '../models/HelpModal'


export default function Navbar() {
    return (
        <div className='bg-gray-50 dark:bg-neutral-900'>
            <div className='flex items-center justify-center py-3 max-w-7xl mx-auto px-8 gap-8'>
                <Link className='' href="/">
                    <Image src={logo} alt='logo' className='w-24' />
                </Link>
                <div className='flex-grow'>
                    <SearchForm />
                </div>
                <div className='flex gap-8'>
                    <Link href="/login" className='flex items-center space-x-1 text-black dark:text-white'>
                        <UserCircle2 />
                        <span>Login</span>
                    </Link>

                    <HelpModal />
                    <Link href="/cart" className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg'>
                        <ShoppingBasket className='text-black dark:text-white' />
                        <span className='sr-only'>Cart</span>
                        <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full -top-0 end-1'>20

                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}
