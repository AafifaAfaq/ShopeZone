'use client'

import { useCart } from "../ContextApi/CartProvider"


interface Product {
  id: number
  title: string
  price: number
  quantity:number

}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
    >
      Add to Cart
    </button>
  )
}
