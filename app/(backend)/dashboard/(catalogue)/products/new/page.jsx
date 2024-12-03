import ProductForm from '@/components/frontend/forms/ProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page() {
  const categoriesData = await getData("categories")
  const usersData = await getData("users")
  const farmersData = usersData.filter((user) => user.role === "FARMER")

  const farmers = farmersData.map((farmer) => ({
    id: farmer.id,
    title: farmer.name,
  }));
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <ProductForm categories={categories} farmers={farmers} />
  )
}
