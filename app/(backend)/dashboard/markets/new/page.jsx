export const dynamic = 'force-dynamic'

import React from 'react'
import MarketForm from '@/components/frontend/forms/MarketForm'
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
    <MarketForm categories={categories} />
  )
}
