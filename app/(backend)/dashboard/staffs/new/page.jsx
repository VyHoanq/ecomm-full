'use client'
import FormHeader from '@/components/form/FormHeader'
import { ToggleInput } from '@/components/form/FormInput'
import TextareaInput from '@/components/form/FormInput/TextAreaInput'
import TextInput from '@/components/form/FormInput/TextInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUseCode } from '@/lib/generateUseCode'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewStaff() {
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true
    }
  })
  const isActive = watch("isActive")

  // const [couponCode, setCouponCode] = useState()
  const [loading, setLoading] = useState(false)


  {/* id, title, code, expiryDate, discount, status */ }

  async function onSubmit(data) {
    const farmerUniqueCode = generateUseCode('LSM', data.name)
    data.code = farmerUniqueCode
    console.log(data)
    makePostRequest(setLoading, 'api/staffs', data, 'Staff', reset,)
  }
  return (
    <div>
      <FormHeader title='Staff' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="NIN_ID" name="nin" register={register} errors={errors} isRequired={true} />
          <TextInput label="Staff's Full Name" name="name" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Password" name="password" type='password' register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Staff's Email" name="email" type='email' register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Day of Birth" name="dob" type='date' register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Staff's Address" name="address" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Staff's Contact" name="contact" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextareaInput label="Notes" name="notes" register={register} errors={errors} isRequired={false} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Staff' loadingButtonTitle='Staff' />
      </form>
    </div>
  )
}
