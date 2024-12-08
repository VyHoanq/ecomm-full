'use client'
import FormHeader from '@/components/form/FormHeader'
import { ImageInput, SelectInput, TextAreaInput, TextInput, ToggleInput, ArrayItemInput } from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { generateUseCode } from '@/lib/generateUseCode'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ProductForm({ categories, farmers }) {
    const [imageUrl, setImageUrl] = useState("")
    const [tags, setTags] = useState([])
    const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            isActive: true,
            isWholesale: false
        }
    })
    const [loading, setLoading] = useState(false)
    const isActive = watch("isActive")
    const isWholesale = watch("isWholesale")
    const router = useRouter()
    function redirect() {
        router.push('/dashboard/products')
    }
    async function onSubmit(data) {
        setLoading(true)
        const slug = generateSlug(data.title)
        const productCode = generateUseCode('LLP', data.title)
        data.slug = slug
        data.tags = tags
        data.productCode = productCode
        data.qty = 1
        data.imageUrl = imageUrl
        console.log(data)
        makePostRequest(setLoading, 'api/products', data, 'Product', reset, redirect)
        setImageUrl("")
        setTags([])
    }
    return (
        <div>
            <FormHeader title='Product' />
            <form onSubmit={handleSubmit(onSubmit)}
                className='w-full max-w-3xl mx-auto p-4 bg-neutral-50  border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3'
            >

                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                    <TextInput label="Product Title" name="title" register={register} errors={errors} isRequired={true} />
                    <SelectInput label="Select Category" name="categoryId" register={register} errors={errors} isRequired={true} options={categories} className='w-full' />
                    <SelectInput label="Select Farmer" name="farmerId" register={register} errors={errors} isRequired={true} options={farmers} className='w-full' />
                    <TextInput label="Product SKU" name="sku" register={register} errors={errors} isRequired={true} className='w-full' />
                    <TextInput label="Product Barcode" name="barcode" register={register} errors={errors} isRequired={true} className='w-full' />
                    <TextInput label="Product Price (Before Discount)" name="productPrice" type='number' register={register} errors={errors} isRequired={true} className='w-full' />
                    <TextInput label="Product Sale Price (Discounted)" name="salePrice" type='number' register={register} errors={errors} isRequired={true} className='w-full' />
                    <TextInput label="Product Stock" name="productStock" type='number' register={register} errors={errors} isRequired={true} className='w-full' />
                    <TextInput label="Unit of Measurement (eg Kilograms)" name="unit" register={register} errors={errors} isRequired={true} className='w-full' />
                    <TextAreaInput label="Product Description" name="description" register={register} errors={errors} isRequired={true} />
                    <ToggleInput label="Suopprts Wholesale Selling" name="isWholesale" trueTitle="Supported" falseTitle="Not Supported" register={register} />
                    {
                        isWholesale && (
                            <div>
                                <TextInput label="Wholesale Price" name="wholesalePrice" type='number' register={register} errors={errors} isRequired={true} className='w-full' />
                                <TextInput label="Minimum Wholesale Qty" name="wholasaleQty" type='number' register={register} errors={errors} isRequired={true} className='w-full' />
                            </div>
                        )
                    }

                    <ImageInput label="Product Image" setImageUrl={setImageUrl} imageUrl={imageUrl} endpoint="productImage" />
                    {/* Tags */}
                    <ArrayItemInput items={tags} setItems={setTags} itemTitle='Tag' />
                    <ToggleInput label="Publish the Product" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
                </div>
                <SubmitButton isLoading={loading} buttonTitle='Create Product' loadingButtonTitle='Product' />
            </form>
        </div>
    )
}
