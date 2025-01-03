import Image from "next/image";
import Link from "next/link";


// Define a type for the product data
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default async function Products() {
  const fetchdata = await fetch("https://fakestoreapi.com/products");
  const res: Product[] = await fetchdata.json();

  return (
    <>
      <div className="gap-8 grid lg:grid-cols-3 p-12">
        {res.map((val) => (
          <div
            key={val.id}
            className="w-full max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={`products/${val.id}`}>
              <div>
                <Image
                  className="p-6 rounded-t-lg w-full h-64 object-contain"
                  src={val.image}
                  alt={val.title}
                  height={100}
                  width={100}
                />
              </div>
              <div className="px-6 py-4">
                <h5 className="text-lg font-semibold text-gray-800 truncate">
                  {val.title}
                </h5>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  High-quality product with excellent value. Perfect for your needs.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-400">
                    ${val.price.toFixed(2)}
                  </span>
                  <button className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
