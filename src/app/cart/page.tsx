"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ item: Product; quantity: number }[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Fetching products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Calculate total price of cart
  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  // Add product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item.id === product.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { item: product, quantity: 1 }];
      }
    });
  };

  // Increment product quantity in cart
  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Decrement product quantity in cart
  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.item.id === productId && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  // Remove product from cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.item.id !== productId)
    );
  };

  return (
    <div className="w-full bg-[#f5f5f5] py-4">

      {/* Cart Section */}
<div className="max-w-2xl mx-auto bg-white rounded-lg p-6 my-10 shadow-lg">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">🛒 Your Cart</h2>
  {cart.length === 0 ? (
    <p className="text-gray-600 mt-4 text-center">Your cart is empty. Start shopping!</p>
  ) : (
    <div className="mt-4">
      {cart.map((cartItem) => (
        <div
          key={cartItem.item.id}
          className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <Image
              src={cartItem.item.image}
              alt={cartItem.item.title}
              width={80} // Increased image size for better visibility
              height={80}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <p className="text-lg font-semibold text-gray-700">{cartItem.item.title}</p>
              <p className="text-sm text-gray-500">
                {cartItem.quantity} x ${cartItem.item.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrementQuantity(cartItem.item.id)}
              className="px-3 py-2 bg-red-100 text-red-600 font-medium rounded-full hover:bg-red-200 transition"
            >
              -
            </button>
            <span className="text-lg font-semibold">{cartItem.quantity}</span>
            <button
              onClick={() => incrementQuantity(cartItem.item.id)}
              className="px-3 py-2 bg-green-100 text-green-600 font-medium rounded-full hover:bg-green-200 transition"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(cartItem.item.id)}
              className="ml-4 px-4 py-2 bg-gray-100 text-gray-600 font-medium rounded-lg hover:bg-red-100 hover:text-red-600 transition"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3 className="text-right text-2xl font-bold text-gray-800 mt-6">
        Total: <span className="text-indigo-600">${total.toFixed(2)}</span>
      </h3>
      <div className="flex justify-end mt-4">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 shadow-md transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )}
</div>
{/* Product Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <Image 
                src={product.image}
                alt={product.title}
                width={150} // Smaller image size
                height={100} // Smaller image size
                className="p-6 rounded-t-lg w-full h-64 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-lg font-bold text-gray-800 mt-2">
                ${product.price}
              </p>
              <button
                className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md">
              <Link href="/products">Product Details</Link>
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
