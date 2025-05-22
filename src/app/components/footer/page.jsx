"use client";
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <>
       <footer id="contact" className="bg-gray-900 text-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LetsMeet</h3>
            <p className="max-w-xs text-gray-400">
              Your go-to platform for seamless video communication.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="#features"
                  className="hover:text-indigo-500 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-indigo-500 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-indigo-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@LetsMeet.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400 mt-2 text-sm italic">
              We’re here to help you 24/7.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600 text-sm select-none">
          © {new Date().getFullYear()} LetsMeet. All rights reserved.
        </div>
      </footer> 
    </>
  )
}

export default Footer
