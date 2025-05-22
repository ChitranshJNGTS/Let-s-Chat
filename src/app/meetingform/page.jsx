"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/page";
import { FaRegCopy, FaCheck } from "react-icons/fa";

const MeetingForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }

    const roomID = `${name}-${new Date().getTime()}`;
    const generatedLink = `https://yourmeetplatform.com/room/${roomID}`;
    setMeetingLink(generatedLink);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(meetingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md p-8 bg-white border border-indigo-300 shadow-xl rounded-2xl"
        >
          <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
            Generate Your Meeting Link
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="e.g., +1234567890"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Generate Link
            </motion.button>
          </form>

          {meetingLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 border-2 border-indigo-200 rounded-xl bg-indigo-50 space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-indigo-700 font-semibold">Your Meeting Link:</h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition"
                >
                  {copied ? <FaCheck /> : <FaRegCopy />} {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <a
                href={meetingLink}
                className="text-indigo-800 break-all underline hover:text-indigo-900 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {meetingLink}
              </a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 mt-2"
              >
                Go to Meeting
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default MeetingForm;
