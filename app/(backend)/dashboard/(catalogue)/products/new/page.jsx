'use client'
import FormHeader from '@/components/form/FormHeader'
import { ImageInput, SelectInput, TextAreaInput, TextInput } from '@/components/form/FormInput'
import ArrayItemInput from '@/components/form/FormInput/ArrayItemInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { CirclePlusIcon, PlusSquare, XOctagon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("")
  const { register, reset, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  async function onSubmit(data) {
    setLoading(true)
    const slug = generateSlug(data.title)
    data.slug = slug
    data.tags = tags
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, 'api/products', data, 'Product', reset,)
    setImageUrl("")
  }
  const categories = [
    { id: 1, title: 'Category 1' },
    { id: 2, title: 'Category 2' },
    { id: 3, title: 'Category 3' },
  ]
  const farmers = [
    { id: 1, title: 'Farmer 1' },
    { id: 2, title: 'Farmer 2' },
    { id: 3, title: 'Farmer 3' },
  ]
  const [tags, setTags] = useState([])

  return (
    <>
      <FormHeader title='Product' />
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
      >

        <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput label="Product Title" name="title" register={register} errors={errors} isRequired={true} />
          <SelectInput label="Select Category" name="categoryId" register={register} errors={errors} isRequired={true} options={categories} className='w-full' />
          <SelectInput label="Select Farmer" name="farmerId" register={register} errors={errors} isRequired={true} options={farmers} className='w-full' />
          <TextInput label="Product SKU" name="sku" register={register} errors={errors} isRequired={true} />
          <TextInput label="Product Barcode" name="barcode" register={register} errors={errors} isRequired={true} />
          <TextInput label="Product Price (Before Discount)" name="productPrice" type='number' register={register} errors={errors} isRequired={true} />
          <TextInput label="Product Sale Price (Discounted)" name="salePrice" type='number' register={register} errors={errors} isRequired={true} />
          <TextAreaInput label="Product Description" name="description" register={register} errors={errors} isRequired={true} />
          <ImageInput label="Product Image" setImageUrl={setImageUrl} imageUrl={imageUrl} endpoint="productImage" />
          {/* Tags */}
          <ArrayItemInput items={tags} setItems={setTags} itemTitle='Tag' />
        </div>
        <SubmitButton isLoading={loading} buttonTitle='Create Product' loadingButtonTitle='Product' />
      </form>
    </>
  )
}
