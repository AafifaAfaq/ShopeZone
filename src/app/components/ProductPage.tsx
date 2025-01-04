
'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity:number

}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [sortBy, setSortBy] = useState('default')

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price
    if (sortBy === 'price-high-low') return b.price - a.price
    return 0
  })

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

