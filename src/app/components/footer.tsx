import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
<>
<footer className="bg-indigo-700 text-gray-200 py-8">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 ">

  {/* About Section */}
  <div>
    <h2 className="text-2xl  text-center font-serif mb-4">ShopZone</h2>
    <p className="text-indigo-300 text-center  leading-relaxed italic">
    Welcome to ShopeZone, where quality meets affordability!
    Experience seamless shopping with a diverse range of products tailored to your needs.
    </p>
    <div className="flex justify-center py-5 mx-2 space-x-7">
      <a href="#" className="text-indigo-300 hover:text-gray-100 transition">
        <FaInstagram />
      </a>
      <a href="#" className="text-indigo-300 hover:text-gray-100 transition">
        <FaFacebook />
      </a>
      <a href="#" className="text-indigo-300 hover:text-gray-100 transition">
        <FaTwitter />
      </a>
      <a href="#" className="text-indigo-300 hover:text-gray-100 transition">
        <FaYoutube />
      </a>
    </div>
  </div>
  {/* Links Section */}
  <div className="px-20 ">
    <h2 className="text-2xl font-serif mb-4">Quick Links</h2>
    <ul className="text-indigo-300 space-y-2">
      <li>
        <a href="/shop" className="hover:text-gray-100 transition">
          Shop
        </a>
      </li>
      <li>
        <a href="/about" className="hover:text-gray-100 transition">
          About ShopeZone
        </a>
      </li>
      <li>
        <a href="/contact" className="hover:text-gray-100 transition">
          Contact Us
        </a>
      </li>
      <li>
        <a href="/faq" className="hover:text-gray-100 transition">
          FAQs
        </a>
      </li>
    </ul>
  </div>

  {/* Subscribe Section */}
  <div>
    <h2 className="text-2xl font-serif mb-4">Subscribe</h2>
    <p className="text-indigo-300 mb-4">
      Stay updated with ShopeZone! Subscribe to our newsletter and be the first to know about our latest products and exclusive offers.
    </p>
    <form className="flex space-x-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg border border-indigo-600 bg-white text-indigo-600 placeholder-indigo-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-200 text-gray-900 font-serif rounded-lg hover:bg-yellow-400 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>
<div className="mt-8 border-t border-indigo-600 pt-4 text-center text-slate-300">
  <p>© 2025 ShopeZone. All Rights Reserved.</p>
  <p>
    Made by Aafifa Afaq
  </p>
</div>
</footer>

</>
  );
}