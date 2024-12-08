import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img from '@/public/asset/a.jpg'
import HeroCarousel from '../models/HeroCarousel'

export default function Header() {
    const categories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
    return (
        <div className='flex gap-8 mt-8'>
            <div className='w-1/3 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-neutral-700 overflow-hidden shadow-md'>
                <h2 className='bg-neutral-200 py-4 px-6 font-bold border-b'>Categories</h2>
                <div className='py-3 px-6 h-[250px] overflow-y-auto flex flex-col gap-4 bg-white'>
                    {
                        categories.map((category, i) => {
                            return (
                                <Link key={i} href="#" className='flex items-center gap-10 py-1 hover:bg-neutral-200 dark:text-black duration-200 transition-all rounded-3xl'>
                                    <Image src={Img} alt='image' width={556} height={56} className='w-14 h-14 rounded-3xl object-cover border border-black' />
                                    <span className='text-sm'>Categories 1</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-2/3'>
                <HeroCarousel />
            </div>
        </div>
    )
}
