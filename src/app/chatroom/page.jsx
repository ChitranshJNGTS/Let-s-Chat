"use client";
import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Video,
  Mic,
  ScreenShare,
  MicOff,
  VideoOff,
  Send,
  MessageCircle,
  PhoneOff,
} from "lucide-react";

export default function Chatroom() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [screenStream, setScreenStream] = useState(null);

  const chatEndRef = useRef(null);
  const videoRef = useRef(null);
  const mediaStream = useRef(null);

  const participants = ["You", "User1", "User2"]; // Mock participants

  // Send a new chat message
  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), text: newMessage }]);
    setNewMessage("");
  };

  // Handle camera stream when videoOn changes
  useEffect(() => {
    if (videoOn) {
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
          toast.error("Cannot access camera");
          setVideoOn(false);
        });
    } else {
      if (mediaStream.current) {
        mediaStream.current.getTracks().forEach((track) => track.stop());
        mediaStream.current = null;
      }
    }
    return () => {
      if (mediaStream.current) {
        mediaStream.current.getTracks().forEach((track) => track.stop());
        mediaStream.current = null;
      }
    };
  }, [videoOn]);

  // Scroll chat to bottom on new messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Stop screen sharing
  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      setScreenStream(null);
    }
  };

  // New function: Leave call
  const leaveCall = () => {
    // Stop camera
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
      mediaStream.current = null;
    }
    // Stop screen sharing
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      setScreenStream(null);
    }
    // Reset states
    setMicOn(false);
    setVideoOn(false);
    toast.success("You have left the call.");
    // Optional: Add navigation or cleanup here
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex font-sans select-none relative">
      <Toaster position="top-center" />

      {/* Open chat button when chat is closed */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          title="Open Chat"
          className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-blue-700 hover:bg-blue-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          aria-label="Open Chat Panel"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 rounded-r-xl shadow-xl flex flex-col overflow-hidden transition-transform duration-300 ease-in-out z-40
          ${chatOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ width: 320 }}
      >
        <div className="p-4 font-semibold border-b border-gray-700 flex justify-between items-center bg-gray-900 text-gray-100">
          Let's Meet
          <button
            onClick={() => setChatOpen(false)}
            aria-label="Close Chat"
            className="p-1 rounded hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
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
      </aside>

      {/* Main content (video + controls) */}
      <main
        className={`flex-1 flex flex-col overflow-hidden p-4 transition-all duration-300 ease-in-out`}
        style={{ marginLeft: chatOpen ? 320 : 0 }}
      >
        <header className="p-6 text-3xl font-extrabold bg-gray-800 shadow-md text-center tracking-wide mb-4">
          Let's Meet
        </header>

        <div className="flex-1 overflow-hidden">
          {screenStream ? (
            <video
              autoPlay
              muted
              ref={(video) => {
                if (video) video.srcObject = screenStream;
              }}
              className="w-full h-full object-contain rounded-xl"
            />
          ) : (
            <div
              className="w-full h-full grid gap-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridAutoRows: "minmax(200px, 1fr)",
              }}
            >
              {participants.map((name, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl shadow-md relative flex items-center justify-center w-full h-full"
                >
                  {index === 0 && videoOn ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <p className="text-gray-400 text-lg italic">{name}</p>
                  )}
                  <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded text-white">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-800 p-5 flex justify-center space-x-6 shadow-inner mt-4">
          {/* Mic toggle */}
          <button
            onClick={() => setMicOn(!micOn)}
            title={micOn ? "Mute mic" : "Unmute mic"}
            className={`rounded-full bg-gray-900 p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              micOn ? "text-blue-500" : "text-gray-400"
            }`}
            aria-pressed={micOn}
            aria-label={micOn ? "Mute mic" : "Unmute mic"}
          >
            {micOn ? <Mic /> : <MicOff />}
          </button>

          {/* Video toggle */}
          <button
            onClick={() => setVideoOn(!videoOn)}
            title={videoOn ? "Stop video" : "Start video"}
            className={`rounded-full bg-gray-900 p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              videoOn ? "text-blue-500" : "text-gray-400"
            }`}
            aria-pressed={videoOn}
            aria-label={videoOn ? "Stop video" : "Start video"}
          >
            {videoOn ? <Video /> : <VideoOff />}
          </button>

          {/* Screen share toggle */}
          <button
            onClick={() => {
              if (screenStream) {
                stopScreenShare();
              } else {
                navigator.mediaDevices
                  .getDisplayMedia({ video: true })
                  .then((stream) => {
                    setScreenStream(stream);
                  })
                  .catch((err) => {
                    console.error("Error sharing screen: ", err);
                    toast.error("Screen sharing failed");
                  });
              }
            }}
            title={screenStream ? "Stop screen sharing" : "Share screen"}
            className={`rounded-full bg-gray-900 p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
              screenStream ? "text-blue-500" : "text-gray-400"
            }`}
            aria-pressed={!!screenStream}
            aria-label={screenStream ? "Stop screen sharing" : "Share screen"}
          >
            <ScreenShare />
          </button>

          {/* Leave call button */}
          <button
            onClick={leaveCall}
            title="Leave call"
            className="rounded-full bg-red-700 p-3 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition text-white"
            aria-label="Leave call"
          >
            <PhoneOff />
          </button>
        </div>
      </main>
    </div>
  );
}
