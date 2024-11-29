import PageHeader from '@/components/backend/layout/PageHeader'
import TabelAction from '@/components/backend/layout/TabelAction'

import React from 'react'

export default function page() {
  return (
    <div>
      <PageHeader title="Limi Community Trainings" linkTitle="New Community" href="/dashboard/limi-community/new" />
      <TabelAction />
      <div className='py-4 px-8'>
        <h1>Table</h1>
      </div>
    </div>
  )
}
