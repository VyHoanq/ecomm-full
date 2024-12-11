import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img from '@/public/asset/a.jpg'
import { CircleDollarSign, FolderSync, HelpingHandIcon } from 'lucide-react'
import HeroCarousel from '../models/Carousels/HeroCarousel'
import SiderbarCategory from '../models/SiderbarCategory'
import { getData } from '../../../lib/getData'

export default async function Header() {
    const banners = await getData("banners")
    return (
        <div className='grid grid-cols-12 gap-8 mb-6'>
            <SiderbarCategory />
            <div className='col-span-full sm:col-span-7 rounded-md'>
                <HeroCarousel banners={banners} />
            </div>
            <div className='col-span-2 hidden sm:block bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-neutral-700 overflow-hidden shadow-md'>
                <h2 className='bg-neutral-200 py-4 px-6 font-bold border-b text-center'>Event</h2>
                <Link
                    href="#"
                    className="flex items-center space-x-1 m-4 text-black dark:text-white"
                >
                    <HelpingHandIcon className="shrink-0 w-5 h-5" />
                    <div className="flex flex-col gap-1">
                        <p className="text-[0.8rem] uppercase">Help Center</p>
                        <p className="text-[0.6rem] items-center">Guide to customer care</p>
                    </div>
                </Link>

                <Link
                    href="#"
                    className="flex items-center space-x-1 m-4 text-black dark:text-white"
                >
                    <FolderSync className="shrink-0 w-5 h-5" />
                    <div className="flex flex-col gap-1">
                        <p className="text-[0.8rem] uppercase">Easy return</p>
                        <p className="text-[0.6rem] items-center">Quick Return</p>
                    </div>
                </Link>
                <Link
                    href="/register-farmer"
                    className="flex items-center space-x-1 m-4 text-black dark:text-white"
                >
                    <CircleDollarSign className="shrink-0 w-5 h-5" />
                    <div className="flex flex-col gap-1">
                        <p className="text-[0.8rem] uppercase">Sell on Zunz</p>
                        <p className="text-[0.6rem] items-center">Million of vistors</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
