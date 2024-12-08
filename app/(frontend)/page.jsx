import Link from 'next/link'
import React from 'react'
import Header from '@/components/frontend/layouts/Header'

export default function page() {
  return (
    <div className='min-h-screen'>
      <Header />
      <h2 className='text-4xl font-bold'>Welcome to Limi Ecommerce</h2>
      <Link href="/register/register-farmer">Account a Famer</Link>
    </div>
  )
}