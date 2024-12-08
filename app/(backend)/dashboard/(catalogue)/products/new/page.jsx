'use client'

export const dynamic = 'force-dynamic'

import ProductForm from '@/components/frontend/forms/ProductForm'
import { getData } from '@/lib/getData'
import { useEffect, useState } from 'react'

export default function NewProduct() {
  const [categories, setCategories] = useState([])
  const [farmers, setFarmers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getData("categories")
        const usersData = await getData("users")

        const farmersData = usersData.filter((user) => user.role === "FARMER")

        const farmers = farmersData.map((farmer) => ({
          id: farmer.id,
          title: farmer.name
        }))

        const categories = categoriesData.map((category) => ({
          id: category.id,
          title: category.title
        }))
        setCategories(categories)
        setFarmers(farmers)
      } catch (error) {
        console.error('Error:', error)
        setCategories([])
        setFarmers([])
      } finally { setLoading(false) }
    }
    fetchData()
  }, [])
  if (loading) return <div>Loading....</div>
  return (
    <ProductForm categories={categories} farmers={farmers} />
  )
}
