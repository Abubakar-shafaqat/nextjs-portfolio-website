"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent rendering until the component is mounted
  if (!isMounted) return null;

  return (
    <header className="lg:flex p-4 lg:p-0 shadow-md md:block mt-5 bg-yellow-500">
      <div className="flex justify-center lg:justify-start items-center w-full lg:w-auto">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto lg:ml-16 flex-row rounded-full border-2 border-black"
        />
        <h1 className="font-bold text-3xl font-mono decoration-wavy text-center ml-10">
        𝓝𝓧𝓣 𝓖𝓮𝓷 𝓒𝓻𝓮𝓪𝓽𝓲𝓸𝓷
        </h1>
        <button
          onClick={toggleMenu}
          className=" dark:text-white focus:outline-none lg:hidden ml-auto"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-2 transition-all duration-300 ease-in-out flex-row">
          <ul className="space-y-2 text-center text-sm bg-yellow-500 border-2 border-black rounded-md">
            <li><Link href="/" className="block text-black dark:text-white py-2">Home</Link></li>
            <li><Link href="/about" className="block text-black dark:text-white py-2">About</Link></li>
            <li><Link href="/project" className="block text-black dark:text-white py-2">Projects</Link></li>
            <li><Link href= "/contact" className="block text-black dark:text-white py-2">Contact</Link></li>
          </ul>
        </div>
      )}

      <nav className="hidden lg:flex lg:items-center ml-28 lg:space-x-6 p-10 font-bold text-xl ">
        <Link href="/" className="block text-black dark:text-white px-2 py-1">Home</Link>
        <Link href="/about" className="block text-black dark:text-white px-2 py-1">About</Link>
        <Link href="/project" className="block text-black dark:text-white px-2 py-1">Project</Link>
        <Link href="/contact" className="block text-black dark:text-white px-2 py-1">Contact</Link>
      </nav>
    </header>
  );
}
