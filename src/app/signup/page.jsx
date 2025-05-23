"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar/page";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
        <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-6xl flex space-x-8">
        {/* Login Form */}
        <div className="w-full max-w-md">
          {isLogin ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back 👋</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                  />
                </div>
                <Link href="/workspace"
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Create an Account 🚀</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Create a password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Login
                </button>
              </p>
            </>
          )}
        </div>
        {/* Sign Up Form */}
        <div className="hidden lg:block w-full max-w-md">
          <div className="flex justify-center items-center h-full">
            <div>
              <h3 className="text-lg text-gray-800 mb-4">More Info</h3>
              <p className="text-gray-600">Here you can put additional information, benefits, or call to action.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
