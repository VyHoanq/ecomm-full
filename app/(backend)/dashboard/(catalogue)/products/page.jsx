import PageHeader from '@/components/backend/layout/PageHeader'
import TabelAction from '@/components/backend/layout/TabelAction'

import React from 'react'

export default function page() {
  return (
    <div>
      <PageHeader title="Products" linkTitle="New Product" href="/dashboard/products/new" />
      <TabelAction />
      <div className='py-4 px-8'>
        <h1>Table</h1>
      </div>
    </div>
  )
}
