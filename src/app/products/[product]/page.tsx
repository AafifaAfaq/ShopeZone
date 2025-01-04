import Image from "next/image";
import Link from "next/link";

export default async function Prodects({
  params,
}: {
  params: { product: string };
}) {
  const data = await fetch(
    `https://fakestoreapi.com/products/${params.product}`
  );
  const res = await data.json();

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-50">
      <div data-aos="fade-up" data-aos-duration="1500" className="container px-5 py-16 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white shadow-md rounded-lg overflow-hidden">
          <div  className="lg:w-1/2 w-full p-5">
            <Image
              alt={res.title}
              className="w-full h-auto object-cover object-center rounded-md"
              src={res.image}
              width={400}
              height={400}
            />
          </div>
          <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                Featured Product
              </h2>
              <h1 className="text-3xl text-gray-900 font-bold mb-4">
                {res.title}
              </h1>
              <p className="leading-relaxed text-gray-700 mb-4">
                {res.description}
              </p>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-semibold text-indigo-500">
                  ${res.price}
                </span>
                <span className="text-sm text-gray-500 ml-4">
                  (Inclusive of all taxes)
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-sm text-gray-600 mb-2">Available Sizes</h3>
                <div data-aos="zoom-out" data-aos-duration="1500" className="flex gap-2">
                  <span className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-indigo-100">
                    Small
                  </span>
                  <span className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-indigo-100">
                    Medium
                  </span>
                  <span className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-indigo-100">
                    Large
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-gray-600 mb-2">Select Color</h3>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer"></div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500"  className="mt-2 flex gap-4">
              <button data-aos="fade-up" data-aos-duration="1500" className="text-white w-[50%] bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                <Link href="/">Buy Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}