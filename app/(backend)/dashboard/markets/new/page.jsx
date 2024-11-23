'use client'
import FormHeader from '@/components/form/FormHeader'
import TextareaInput from '@/components/form/FormInput/TextAreaInput'
import TextInput from '@/components/form/FormInput/TextInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewFarmer() {
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm()
  const [couponCode, setCouponCode] = useState()
  const [loading, setLoading] = useState(false)


  {/* id, title, code, expiryDate, discount, status */ }

  async function onSubmit(data) {
    const farmerUniqueCode = generateCouponCode(data.title, data.expiryDate)
    data.couponCode = couponCode
    console.log(data)
    makePostRequest(setLoading, 'api/coupons', data, 'Coupon', reset,)
  }
  return (
    <>
      <FormHeader title='Farmer' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Farmer's Name" name="name" register={register} errors={errors} isRequired={true} />
          <TextInput label="Farmer's Phone Number" name="phone" type='number' register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Farmer's Email" name="email" type='email' register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Farmer's Address" name="address" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Farmer's Contact" name="contact" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextareaInput label="Farmer's Payment Details" name="payment" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextareaInput label="Notes" name="notes" register={register} errors={errors} isRequired={false} className='w-full' />

        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Coupon' loadingButtonTitle='Coupon' />
      </form>
    </>
  )
}
