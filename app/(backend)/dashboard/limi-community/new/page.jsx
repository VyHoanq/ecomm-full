'use client'
import FormHeader from '@/components/form/FormHeader'
import { ImageInput, SelectInput, TextAreaInput, TextInput, ToggleInput } from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import QuillEditor from '@/components/form/QuillEditor'


export default function NewTraining() {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    makePostRequest(setLoading, 'api/trainings', data, 'Training', reset);
    setImageUrl("");
    setContent("")
  }

  const categories = [
    { id: 1, title: 'Category 1' },
    { id: 2, title: 'Category 2' },
    { id: 3, title: 'Category 3' },
  ];

  return (
    <>
      <FormHeader title="Training" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl mx-auto p-4 bg-neutral-50 border border-neutral-700 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-700 dark:border-neutral-600 my-3"
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <TextInput label="Training Title" name="title" register={register} errors={errors} isRequired={true} className="w-full" />
          <SelectInput label="Select Category" name="categoryId" register={register} errors={errors} isRequired={true} options={categories} hasMultiple={false} className="w-full" />
          <TextAreaInput label="Training Description" name="description" register={register} errors={errors} isRequired={true} />
          <ImageInput label="Training Thumbnail" setImageUrl={setImageUrl} imageUrl={imageUrl} endpoint="trainingImage" />
          <QuillEditor label="Training Content" value={content} onChange={setContent} />
          <ToggleInput label="Publish the Training" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Training" loadingButtonTitle="Training" />
      </form>
    </>
  );
}
