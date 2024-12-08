export const dynamic = 'force-dynamic'

import React from 'react'
import TrainingForm from '@/components/frontend/forms/TrainingForm'
import { getData } from '@/lib/getData'

export default async function page() {
  const categoriesData = await getData("categories")
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <TrainingForm categories={categories} />
  )
}
