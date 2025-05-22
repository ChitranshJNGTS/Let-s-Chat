"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar/page";
import Image from "next/image";

export default function MeetPage() {
  const [meetingCode, setMeetingCode] = useState("");

  const handleJoinMeeting = () => {
    if (meetingCode) {
      // Redirect to a meeting page with the provided code
      window.location.href = `/meeting/${meetingCode}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative flex items-center justify-center bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: "url('/assests/image/image 1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Join or Create Your Meeting with LetsMeet
          </h1>
          <p className="text-lg mb-8">Effortlessly create or join meetings and connect with your team or clients from anywhere.</p>
          <div className="flex justify-center gap-4">
            <Link href="/meetingform">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Create Meeting
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              <Link href={"/chatroom"}>Join meeting </Link>
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Create and Join Meeting Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Create Meeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 border-2 border-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Create a New Meeting</h2>
            <p className="text-lg text-gray-600 mb-8">
              Create a meeting with just a few clicks. Share the link and start collaborating instantly.
            </p>
            <Link href="/meetingform">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Create Meeting
              </motion.button>
            </Link>
          </motion.div>

          {/* Join Meeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 border-2 border-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Join an Existing Meeting</h2>
            <p className="text-lg text-gray-600 mb-8">
              Enter the meeting code provided to you to join an ongoing session.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter Meeting Code"
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleJoinMeeting}
                className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Join Meeting
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 mb-4"
          >
            Need help? Reach out to us at <span className="text-indigo-500">support@LetsMeet.com</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-sm text-gray-600"
          >
            © {new Date().getFullYear()} LetsMeet. All rights reserved.
          </motion.div>
        </div>
      </footer>

    </div>
  );
}
