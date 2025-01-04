'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../ContextApi/CartProvider'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity:number
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div  className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/${product.id}`}>
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/${product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate hover:text-indigo-600">
            {product.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
