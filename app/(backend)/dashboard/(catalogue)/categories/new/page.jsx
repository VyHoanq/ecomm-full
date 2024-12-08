'use client'
export const dynamic = 'force-dynamic'

import FormHeader from '@/components/form/FormHeader'
import { ImageInput, TextAreaInput, TextInput, ToggleInput } from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true
    }
  })
  const isActive = watch("isActive")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  function redirect() {
    router.push('/dashboard/categories')
  }
  async function onSubmit(data) {
    setLoading(true)
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, 'api/categories', data, 'Category', reset, redirect)
    setImageUrl("")
  }
  // const markets = [
  //   { id: 1, title: 'Market 1' },
  //   { id: 2, title: 'Market 2' },
  //   { id: 3, title: 'Market 3' },
  // ]
  return (
    <div>
      <FormHeader title='Category' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Category Title" name="title" register={register} errors={errors} isRequired={true} />

          <TextAreaInput label="Category Description" name="description" register={register} errors={errors} isRequired={true} />
          <ImageInput label="Category Image" setImageUrl={setImageUrl} imageUrl={imageUrl} endpoint="categoryImage" />
          <ToggleInput label="Publish the Category" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Category' loadingButtonTitle='Category' />
      </form>
    </div>
  )
}
