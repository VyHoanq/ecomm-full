'use client'
import FormHeader from '@/components/form/FormHeader'
import { ToggleInput } from '@/components/form/FormInput'
import TextInput from '@/components/form/FormInput/TextInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCoupon() {
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true
    }
  })
  const isActive = watch("isActive")
  const [couponCode, setCouponCode] = useState()
  const [loading, setLoading] = useState(false)


  {/* id, title, code, expiryDate, discount, status */ }

  async function onSubmit(data) {
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    data.couponCode = couponCode
    console.log(data)
    makePostRequest(setLoading, 'api/coupons', data, 'Coupon', reset,)
  }
  return (
    <>
      <FormHeader title='Coupon' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Coupon Title" name="title" register={register} errors={errors} isRequired={true} className='w-full' />
          <TextInput label="Coupon Expiry Date" name="expiryDate" register={register} errors={errors} isRequired={true} type='date' className='w-full' />
          <ToggleInput label="Publish the Coupon" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Coupon' loadingButtonTitle='Coupon' />
      </form>
    </>
  )
}
