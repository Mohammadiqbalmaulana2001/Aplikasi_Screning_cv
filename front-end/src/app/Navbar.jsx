"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const pathname = usePathname();

    return (
      <div>
        <nav className="w-full  bg-black fixed top-0 left-0 right-0 z-10  ">
          <div className="justify-between px-4 mx-auto max-w-[1270px] md:items-center md:flex md:px-8">
            <div>
              <div className="flex  items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/">
                  <h1 className="text-3xl text-sky-300 font-bold ">SkillQ</h1>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src="/close.svg" width={30} height={30} alt="logo" />
                    ) : (
                      <Image
                        src="/hamburger-menu.svg"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {/* Dashboard Link */}
                <li className={`text-xl ${pathname === '/' ? 'text-sky-300' : 'text-white'} text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-sky-300 border-sky-300 md:hover:text-sky-300 md:hover:bg-transparent`}>
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                {/* Produk Dropdown */}
                <li className="relative group pb-6 md:pb-0 flex justify-center items-center md:text-center">
                  {/* Produk Dropdown Button */}
                  <button
                    className={`text-xl ${pathname === '/score' || pathname === '/category' ? 'text-sky-300' : 'text-white'} text-white py-2 px-6 border-b-2 md:border-b-0 hover:bg-sky-300 border-sky-300 md:hover:text-sky-300 md:hover:bg-transparent`}
                    onClick={toggleDropdown}
                  >
                    Produk
                  </button>
                  {/* Produk Dropdown Content */}
                  {dropdownOpen && (
                    <div className="absolute bg-white mt-2 py-2 top-10 rounded shadow-lg">
                      {/* Produk Dropdown Links */}
                      <Link href="/score">
                        <h3 className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setNavbar(!navbar)}>
                          SKOR CV SAYA
                        </h3>
                      </Link>
                      <Link href="/category">
                        <h3 className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setNavbar(!navbar)}>
                          CATEGORY CV SAYA
                        </h3>
                      </Link>
                      <Link href="/minQ">
                        <h3 className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setNavbar(!navbar)}>
                          minQ
                        </h3>
                      </Link>
                    </div>
                  )}
                </li>
                <li className={`text-xl ${pathname === '#team' ? 'text-sky-300' : 'text-white'} text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-sky-300 border-sky-300 md:hover:text-sky-300 md:hover:bg-transparent`}>
                  <Link href="#team">
                    Kelompok
                  </Link>
                </li>
                
              </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}
