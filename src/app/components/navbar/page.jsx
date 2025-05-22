"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showGuestInfo, setShowGuestInfo] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-white/80 w-full backdrop-blur shadow-md fixed top-0 z-50">
      <div className="w-11/13 mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="text-2xl font-bold text-blue-600 select-none">
          Let's Talk
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium">
          {[
            { name: "Home", href: "/home" },
            { name: "About", href: "/about" },
            { name: "Features", href: "/features" },
            { name: "Pricing", href: "/price" },
          ].map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`relative pb-1 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:rounded-full
                  ${
                    isActive(href)
                      ? "text-blue-600 after:bg-blue-600"
                      : "text-gray-700 after:bg-transparent hover:text-blue-600 hover:after:bg-blue-400"
                  }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium relative">
          <div className="relative">
            <button
              onClick={() => setShowGuestInfo(!showGuestInfo)}
              className="text-gray-600 border border-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-50 transition flex items-center gap-1"
            >
              Guest
            </button>

            {/* Dropdown Panel */}
            {showGuestInfo && (
              <div className="absolute top-full mt-2 right-0 w-64 bg-white shadow-xl rounded-xl p-4 border border-gray-200 z-50 animate-fade-in-up">
                <h4 className="font-semibold text-gray-800 mb-2">Guest Info</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><span className="font-medium">Role:</span> Guest</li>
                  <li><span className="font-medium">Access:</span> Limited</li>
                  <li><span className="font-medium">Features:</span> View only, no meeting creation</li>
                  <li><span className="font-medium">Upgrade:</span> <a href="/signup" className="text-blue-600 hover:underline">Sign up</a> for full access</li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full backdrop-blur-md bg-white shadow-xl border-t border-gray-200 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col px-6 py-6 space-y-5 text-gray-800 font-medium text-base">
            {[
              { name: "Home", href: "/home" },
              { name: "About", href: "/about" },
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/price" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`relative pb-1 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:rounded-full block
                    ${
                      isActive(href)
                        ? "text-blue-600 after:bg-blue-600"
                        : "text-gray-800 after:bg-transparent hover:text-blue-600 hover:after:bg-blue-400"
                    }`}
                >
                  {name}
                </Link>
              </li>
            ))}

            <li>
              <div className="bg-gray-100 px-4 py-3 rounded-lg shadow">
                <h4 className="font-semibold text-gray-800 mb-1">Guest Info</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><span className="font-medium">Role:</span> Guest</li>
                  <li><span className="font-medium">Access:</span> Limited</li>
                  <li><span className="font-medium">Features:</span> View only</li>
                  <li><span className="font-medium">Upgrade:</span> <a href="/signup" className="text-blue-600 hover:underline">Sign up</a></li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
              >
                Sign Up Free
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
