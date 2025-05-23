"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useState } from "react";

export default function PricingSection() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently open FAQ

  const plans = [
    {
      name: "Basic",
      users: "1-20 user",
      price: "Free",
      cta: "Sign Up",
      features: [
        "Meetings up to 40 minutes per meeting",
        "100 Participants per meeting",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      users: "1–99 users",
      price: "₹1,147",
      subText: "/month/user, billed annually",
      altText: "or ₹1,376 billed monthly, excluding GST",
      cta: "Buy Now",
      features: [
        "Everything in Basic, and:",
        "Meetings up to 30 hours per meeting",
        "100 Participants per meeting",
      ],
      highlight: true,
    },
    {
      name: "Business",
      users: "1–250 users",
      price: "₹1,666",
      subText: "/month/user, billed annually",
      altText: "or ₹1,999 billed monthly, excluding GST",
      cta: "Buy Now",
      features: [
        "Everything in Pro, and:",
        "300 Participants per meeting",
        "Increase with Large Meeting",
      ],
      highlight: false,
    },
  ];

  // Function to toggle the FAQ answer
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6">
        <div className="text-center mt-7 mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Plans & Pricing
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Choose a plan that fits your needs.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 border transition duration-300 ease-in-out transform hover:scale-105 ${
                plan.highlight
                  ? "bg-green-50 border-green-400 shadow-lg"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {plan.highlight && (
                <p className="text-sm text-green-600 font-medium mb-2">
                  Meet Zoom AI Companion!
                </p>
              )}
              <h3 className="text-xl font-bold text-blue-700">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{plan.users}</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-2">
                {plan.price}
              </p>
              {plan.subText && (
                <p className="text-sm text-gray-500">{plan.subText}</p>
              )}
              {plan.altText && (
                <p className="text-sm text-gray-400 mt-1">{plan.altText}</p>
              )}

              <Link
                href="#"
                className={`inline-block mt-6 px-5 py-2 rounded-full font-semibold border transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-blue-500 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 text-lg">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3/4 mx-auto">
          <motion.h3
            className="text-3xl font-bold text-gray-800 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="mt-10 space-y-4">
            {[
              {
                question: "What is the difference between the plans?",
                answer:
                  "The Basic plan is free with limited features, the Pro plan offers more features with 30-hour meetings and additional benefits, and the Business plan includes advanced features for large teams.",
              },
              {
                question: "Can I change my plan later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan anytime via your account settings.",
              },
              {
                question: "Is the Pro plan billed annually or monthly?",
                answer:
                  "The Pro plan is billed annually at ₹1,147/month/user, or ₹1,376/month/user if billed monthly, excluding GST.",
              },
              {
                question: "How many participants can join a meeting?",
                answer:
                  "The Basic plan supports 100 participants, the Pro plan supports 100 participants, and the Business plan supports up to 300 participants, with the option to increase it with Large Meeting.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-lg font-semibold text-gray-700">{faq.question}</h4>
                  <motion.span
                    className={`text-xl text-gray-500 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </div>
                {activeIndex === index && (
                  <motion.p
                    className="text-gray-600 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
