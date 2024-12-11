import Link from 'next/link'
import React from 'react'
import Header from '@/components/frontend/layouts/Header'
import MarketList from '@/components/frontend/models/MarketList'
import CategoryList from '@/components/frontend/models/CategoryList'
import LimiList from '../../components/frontend/models/LimiList'

export default function page() {
  return (
    <div className='min-h-screen'>
      <Header />
      <MarketList />
      <div className='py-8'>
        <CategoryList />
      </div>
      <div className='py-8'>
        <CategoryList />
      </div><div className='py-8'>
        <CategoryList />
      </div><div className='py-8'>
        <CategoryList />
      </div>

      <LimiList />

      <h2 className='text-4xl font-bold'>Welcome to Limi Ecommerce</h2>
      <Link href="/register/register-farmer">Account a Famer</Link>
    </div>
  )
}