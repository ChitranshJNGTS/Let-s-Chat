"use client";
import { ArrowRight, CheckCircle, Users, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";

export default function LandingPage() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-white via-indigo-50 to-indigo-100 text-gray-900">
      {/* Navbar */}
      {/* Hero Section */}
      <header className="flex mt-10 flex-col-reverse md:flex-row max-w-7xl mx-auto px-6 py-20 items-center md:items-start gap-60">
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
            Experience Seamless Video Conferencing with LetsMeet
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Connect, collaborate, and communicate with your team effortlessly —
            all in one sleek platform.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow"
            >
              Get Started
              <ArrowRight className="ml-3" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="w-full hidden md:flex max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
            alt="Video conferencing"
            className="rounded-3xl shadow-lg"
          />
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Everything you need for productive meetings.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              Icon: Shield,
              title: "Secure & Private",
              desc: "End-to-end encryption and privacy controls keep your conversations safe.",
            },
            {
              Icon: Users,
              title: "Collaborate Effortlessly",
              desc: "Share screens, chat, and collaborate with your team in real-time.",
            },
            {
              Icon: CheckCircle,
              title: "Reliable Performance",
              desc: "Smooth video and audio with minimal lag, even on low bandwidth.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="space-y-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Icon className="mx-auto text-indigo-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">
            Why Choose LetsMeet?
          </h2>
        </motion.div>

        {/* Features List */}
        <div className="space-y-28">
          {/* Topic 1 */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
              alt="Collaboration"
              className="rounded-2xl shadow-xl w-full"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-700 text-lg">
                Collaborate with your team from anywhere in the world. With
                real-time chat, screen sharing, and whiteboarding, team synergy
                has never been easier.
              </p>
            </div>
          </motion.div>

          {/* Topic 2 */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">HD Video & Audio</h3>
              <p className="text-gray-700 text-lg">
                Enjoy uninterrupted, high-quality video and crystal-clear audio
                powered by next-gen compression technology — even on low
                bandwidth.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
              alt="HD Video"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          {/* Topic 3 */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXRUKE6FggXhehMNQjIevZi6fTN2R2WYEig&s
"
              alt="Security"
              className="rounded-2xl shadow-xl w-full"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Privacy & Security</h3>
              <p className="text-gray-700 text-lg">
                Our end-to-end encryption ensures your meetings and data stay
                confidential and protected. We take your privacy seriously.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New: Extra Section */}
     <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-indigo-800 mb-6 leading-tight">
      What Makes Us Different?
    </h2>
    <p className="text-lg text-gray-700 mb-12">
      Unlike others, LetsTalk combines performance, usability, and design to
      create a truly immersive conferencing experience.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {/* First Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="mb-4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 10l2 2-2 2m6-4l2 2-2 2m-7-6h6m4 0h.01M12 12h.01M12 18h.01M9 14l-2 2m4-6l2 2"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">AI-Powered Noise Cancellation</h3>
        <p className="text-gray-600">
          Enjoy distraction-free meetings even in noisy environments.
        </p>
      </div>
      
      {/* Second Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="mb-4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 10l2 2-2 2m6-4l2 2-2 2m-7-6h6m4 0h.01M12 12h.01M12 18h.01M9 14l-2 2m4-6l2 2"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Smart Scheduling</h3>
        <p className="text-gray-600">
          Book meetings seamlessly and integrate with your calendar.
        </p>
      </div>

      {/* Third Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="mb-4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 10l2 2-2 2m6-4l2 2-2 2m-7-6h6m4 0h.01M12 12h.01M12 18h.01M9 14l-2 2m4-6l2 2"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Virtual Backgrounds</h3>
        <p className="text-gray-600">
          Customize your look with stylish, professional backdrops.
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer/>
    </div>
    </>
  );
}
