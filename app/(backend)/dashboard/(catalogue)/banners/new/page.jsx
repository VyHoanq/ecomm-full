'use client'
import FormHeader from '@/components/form/FormHeader'
import { ToggleInput } from '@/components/form/FormInput'
import ImageInput from '@/components/form/FormInput/ImageInput'
import TextInput from '@/components/form/FormInput/TextInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewBanner() {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true
    }
  })
  const isActive = watch("isActive")
  const router = useRouter()
  function redirect() {
    router.push('/dashboard/banners')
  }
  async function onSubmit(data) {

    setLoading(true)
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, 'api/banners', data, 'Banner', reset, redirect)
    setImageUrl("")
  }
  return (
    <>
      <FormHeader title='Banner' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Banner Title" name="title" register={register} errors={errors} isRequired={true} />
          <TextInput label="Banner Link" name="link" type="url" register={register} errors={errors} isRequired={true} />

          <ImageInput label="Banner Image" setImageUrl={setImageUrl} imageUrl={imageUrl} endpoint="bannerImage" />
          <ToggleInput label="Publish the Banner" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Banner' loadingButtonTitle='Banner' />
      </form>
    </>
  )
}
