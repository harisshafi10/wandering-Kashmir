import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t
    border-gray-800 bg-gray-900 text-gray-400">
      <p className="text-xs">© 2024 Wandering Kashmir. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-gray-400 hover:text-emerald-400">
          <Facebook className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-emerald-400">
          <Twitter className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-emerald-400">
          <Instagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </footer>
  );
}
