// components/Footer.tsx
"use client";

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-12 px-4">
      <h2 className="text-2xl font-bold tracking-wide mb-6">MUSICCO</h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl mb-6">
        <FaFacebookF className="hover:text-[#f42e55] transition" />
        <FaYoutube className="hover:text-[#f42e55] transition" />
        <FaTwitter className="hover:text-[#f42e55] transition" />
        <FaInstagram className="hover:text-[#f42e55] transition" />
        <FaSpotify className="hover:text-[#f42e55] transition" />
        <FaApple className="hover:text-[#f42e55] transition" />
      </div>

      {/* Links */}
      <div className="text-sm flex flex-wrap justify-center gap-6 mb-4 text-gray-300">
        <a href="#" className="hover:text-white transition">Privacy policy</a>
        <a href="#" className="hover:text-white transition">Terms and conditions</a>
        <a href="#" className="hover:text-white transition">Contact</a>
        <a href="#" className="hover:text-white transition">Credits</a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © 2018 Musicco — Music WordPress Theme for Singer & Bands by ThemeGoods.
      </p>
    </footer>
  );
}
