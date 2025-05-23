"use client";
import React from "react";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-indigo-100">
        <div className="max-w-7xl mt-5 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-indigo-800 mb-6"
          >
            All the Features You Need to Elevate Your Meetings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto"
          >
            Our platform offers a wide range of tools and functionalities that enable seamless and productive meetings.
            From virtual backgrounds to AI-powered enhancements, we provide everything you need to make every meeting a success.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center items-center mb-6">
                  <feature.icon className="h-16 w-16 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Features;

// Feature data & icons
import {
  Sparkles,
  CalendarClock,
  Image as ImageIcon,
  Users,
  MonitorSmartphone,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Noise Cancellation",
    description: "Eliminate background noise automatically, ensuring clear communication even in noisy environments.",
    icon: Sparkles,
  },
  {
    title: "Smart Scheduling Integration",
    description: "Automatically schedule meetings based on participants' availability and integrate with your calendar.",
    icon: CalendarClock,
  },
  {
    title: "Virtual Backgrounds",
    description: "Customize your meeting environment with a wide selection of professional virtual backgrounds.",
    icon: ImageIcon,
  },
  {
    title: "Real-Time Collaboration Tools",
    description: "Share your screen, collaborate on documents, and brainstorm ideas in real-time with meeting participants.",
    icon: Users,
  },
  {
    title: "Seamless Device Integration",
    description: "Connect with any device or operating system seamlessly, whether you're on a laptop, tablet, or mobile.",
    icon: MonitorSmartphone,
  },
  {
    title: "In-App Messaging",
    description: "Communicate with meeting participants directly within the app with our secure and private messaging feature.",
    icon: MessageCircle,
  },
];
