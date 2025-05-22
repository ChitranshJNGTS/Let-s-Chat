"use client";
import { useState, useRef, useEffect } from "react";
import {
  Video,
  Mic,
  ScreenShare,
  PhoneOff,
  VideoOff,
  MicOff,
  Send,
  MessageCircle,
  X,
} from "lucide-react";
import Link from "next/link";

export default function WooglyTalk() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const chatEndRef = useRef(null);
  const videoRef = useRef(null);  // Reference for video element
  const mediaStream = useRef(null);  // Store the media stream

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), text: newMessage },
    ]);
    setNewMessage("");
  };

  useEffect(() => {
    if (videoOn) {
      // Request camera access when video is turned on
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          mediaStream.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing camera: ", err);
        });
    } else {
      // Stop the camera stream when video is turned off
      if (mediaStream.current) {
        const tracks = mediaStream.current.getTracks();
        tracks.forEach((track) => track.stop());
        mediaStream.current = null;  // Reset the media stream
      }
    }

    // Cleanup the video stream when the component is unmounted
    return () => {
      if (mediaStream.current) {
        const tracks = mediaStream.current.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [videoOn]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex flex-col relative font-sans select-none">
      {/* Header */}
      <div className="p-6 text-3xl font-extrabold bg-gray-800 shadow-md text-center tracking-wide">
        Let's Talk
      </div>

      {/* Body: Video area */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-auto">
        {/* Your video */}
        <div className="bg-gray-800 rounded-2xl flex items-center justify-center h-72 md:h-auto shadow-md">
          {videoOn ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <p className="text-gray-400 italic text-lg">Video Off</p>
          )}
        </div>

        {/* Participant video */}
        <div className="bg-gray-800 rounded-2xl flex items-center justify-center h-72 md:h-auto shadow-md">
          <p className="text-xl font-semibold text-gray-200">Participant</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 p-5 flex justify-center space-x-6 shadow-inner">
        {[{
          on: micOn,
          onIcon: <Mic />,
          offIcon: <MicOff />,
          onTitle: "Mute mic",
          offTitle: "Unmute mic",
          onClick: () => setMicOn(!micOn),
        }, {
          on: videoOn,
          onIcon: <Video />,
          offIcon: <VideoOff />,
          onTitle: "Stop video",
          offTitle: "Start video",
          onClick: () => setVideoOn(!videoOn),
        }, {
          on: true,
          onIcon: <ScreenShare />,
          offIcon: <ScreenShare />,
          onTitle: "Share screen",
          offTitle: "Share screen",
          onClick: async () => {
            try {
              const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
              // Handle screen sharing stream here
            } catch (err) {
              console.error("Error sharing screen: ", err);
            }
          },
        }, {
          on: true,
          onIcon: <PhoneOff />,
          offIcon: <PhoneOff />,
          onTitle: "Leave call",
          offTitle: "Leave call",
          onClick: () => alert("Leaving call..."),
          bgClass: "bg-red-700 hover:bg-red-600",
        }].map(({ on, onIcon, offIcon, onTitle, offTitle, onClick, bgClass }, i) => (
          <button
            key={i}
            onClick={onClick}
            title={on ? onTitle : offTitle}
            className={`${bgClass ? bgClass : "bg-blue-700 hover:bg-blue-600"} p-4 rounded-full shadow-md transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-pressed={on}
          >
            {on ? onIcon : offIcon}
          </button>
        ))}
      </div>

      {/* Chat toggle button fixed at bottom-right */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
        {/* Animated chat panel */}
        <div
          className={`w-80 h-[380px] bg-gray-800 rounded-xl shadow-xl flex flex-col overflow-hidden
            transform transition-all duration-500 ease-in-out
            ${chatOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="p-4 font-semibold border-b border-gray-700 flex justify-between items-center bg-gray-900 text-gray-100">
            Let's Talk
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-700">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm italic select-text">
                No messages yet — say hi!
              </p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-blue-700 rounded-lg px-3 py-2 max-w-xs break-words shadow-sm select-text"
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-gray-700 flex items-center space-x-3 bg-gray-900">
            <input
              type="text"
              className="flex-1 p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              spellCheck={false}
              autoComplete="off"
              aria-label="Type a message"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg shadow-md transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Send message"
            >
              <Send size={22} />
            </button>
          </div>
        </div>

        {/* Chat toggle button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400"
          title={chatOpen ? "Close chat" : "Open chat"}
          aria-label="Toggle chat"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
}
