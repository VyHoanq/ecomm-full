'use client'
import FormHeader from '@/components/form/FormHeader'
import { SelectInput, ToggleInput } from '@/components/form/FormInput'
import ImageInput from '@/components/form/FormInput/ImageInput'
import TextareaInput from '@/components/form/FormInput/TextAreaInput'
import TextInput from '@/components/form/FormInput/TextInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewMarket() {
  const [logoUrl, setLogoUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true
    }
  })

  const categories = [
    { id: 1, title: 'Market 1' },
    { id: 2, title: 'Market 2' },
    { id: 3, title: 'Market 3' },
  ]
  const isActive = watch("isActive")
  async function onSubmit(data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    setLoading(true)
    data.logoUrl = logoUrl
    console.log(data)
    makePostRequest(setLoading, 'api/markets', data, 'Market', reset,)
    setLogoUrl("")
  }
  return (
    <>
      <FormHeader title='Market' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Market Title" name="title" register={register} errors={errors} isRequired={true} className='w-full' />
          <SelectInput label="Select Categories" name="categoryIds" register={register} errors={errors} isRequired={true} options={categories} hasMultiple={false} className='w-full' />
          <ImageInput label="Market Logo" setImageUrl={setLogoUrl} imageUrl={logoUrl} endpoint="marketImage" />
          <TextareaInput label="Market Description" name="description" register={register} errors={errors} isRequired={true} />
          <ToggleInput label="Publish the Market" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Market' loadingButtonTitle='Market' />
      </form>
    </>
  )
}
