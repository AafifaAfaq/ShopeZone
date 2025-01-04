'use client'

import { useState } from 'react'
import { useCart } from '../ContextApi/CartProvider'
import { ShoppingCart } from 'lucide-react'


export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingCart className="w-6 h-6 mr-1" />
        <span className="font-semibold">{totalItems}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10">
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 text-center mb-6">🛒 Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={clearCart}
                    className="w-full bg-red-500 text-white rounded py-2 hover:bg-red-600 transition-colors mb-2"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => alert('Checkout functionality to be implemented')}
                    className="w-full bg-indigo-600 text-white rounded py-2 hover:bg-indigo-700 transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
