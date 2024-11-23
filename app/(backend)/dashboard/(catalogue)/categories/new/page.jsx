'use client'
import FormHeader from '@/components/form/FormHeader'
import ImageInput from '@/components/form/FormInput/ImageInput'
import TextareaInput from '@/components/form/FormInput/TextAreaInput'
import TextInput from '@/components/form/FormInput/TextInput'
import SubmitButton from '@/components/form/SubmitButton'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  async function onSubmit(data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    data.image = imageUrl
    console.log(data)
  }
  return (
    <>
      <FormHeader title='Category' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Category Title" name="title" register={register} errors={errors} isRequired={true} />
          <TextareaInput label="Category Description" name="description" register={register} errors={errors} isRequired={true} />
          <ImageInput label="Category Image" setImageUrl={setImageUrl} imageUrl={imageUrl} endpoint="categoryImage" />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Category' loadingButtonTitle='Category' />
      </form>
    </>
  )
}
