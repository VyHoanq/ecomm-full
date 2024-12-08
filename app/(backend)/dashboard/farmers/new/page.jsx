'use client'
import FormHeader from '@/components/form/FormHeader'
import FarmerForm from '@/components/frontend/forms/FarmerForm'
import React from 'react'

export default function NewFarmer() {

  return (
    <div>
      <FormHeader title='Farmer' />
      <FarmerForm />
    </div>
  )
}
