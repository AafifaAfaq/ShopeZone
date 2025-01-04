"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// Define a type for the product data
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function Products() {
  const [cart, setCart] = useState<{ item: Product; quantity: number }[]>([]); // Cart state to track items
  const [total, setTotal] = useState(0); // Total price state
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Initialize AOS
    AOS.init();
  }, []);

  // Calculate the total price of items in the cart
  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  // Add product to cart
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

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div className="min-h-screen p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Best Selling Products</h2>

      {/* Cart UI */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 my-10 shadow-lg" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 mt-4 text-center">Your cart is empty. Start shopping!</p>
        ) : (
          <div className="mt-4">
            {cart.map((cartItem) => (
              <div
                key={cartItem.item.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-duration="1500"
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

      {/* Product Grid */}
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Link href={`products/${product.id}`}>
              <div>
                <Image
                  className="p-6 rounded-t-lg w-full h-64 object-contain"
                  src={product.image}
                  alt={product.title}
                  height={100}
                  width={100}
                />
              </div>
              <div className="px-6 py-4">
                <h5 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h5>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-400">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation when clicking the button
                      addToCart(product);
                    }}
                    className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
 
);
}