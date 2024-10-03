import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur
     supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block text-emerald-400">WANDERING KASHMIR</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-emerald-400 text-gray-400" href="#buy">
              Buy
            </Link>
            <Link className="transition-colors hover:text-emerald-400 text-gray-400" href="#rent">
              Rent
            </Link>
            <Link className="transition-colors hover:text-emerald-400 text-gray-400" href="#gallery">
              Gallery
            </Link>
            <Link className="transition-colors hover:text-emerald-400 text-gray-400" href="#blogs">
              Blogs
            </Link>
            <Link className="transition-colors hover:text-emerald-400 text-gray-400" href="#contact">
              Contact
            </Link>
            <Link className="transition-colors hover:text-emerald-400 text-gray-400" href="#about">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
