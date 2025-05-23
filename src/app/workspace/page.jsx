"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaVideo, FaLink, FaUserCircle, FaPhone, FaPlus, FaCog, FaCircleNotch, FaCircle, FaInfoCircle, FaHistory } from "react-icons/fa";

const initialChats = [
    {
        id: 1,
        name: "Swati - THN",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        typing: true,
        messages: [
            { id: 1, text: "Hey! Have you seen WhatsApp Web feature?", fromMe: true, time: "02:00", status: "read" },
            { id: 2, text: "Yeah...Awsummmmm 😁😎😍", fromMe: false, time: "02:01" },
            { id: 3, text: "Find more details on http://thehackernews.com/.", fromMe: true, time: "02:01", status: "read" },
        ],
    },
    {
        id: 2,
        name: "Chintu Voda",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        typing: false,
        messages: [],
    },
    {
        id: 3,
        name: "Pinder whatzap",
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        typing: false,
        messages: [],
    },
];

export default function LetsMeetApp() {
    const [chats, setChats] = useState(initialChats);
    const [activeChatId, setActiveChatId] = useState(initialChats[0].id);
    const [messageInput, setMessageInput] = useState("");
    const [newUserModal, setNewUserModal] = useState(false);
    const [newUserName, setNewUserName] = useState("");
    const [newUserAvatar, setNewUserAvatar] = useState("");
    const messageEndRef = useRef(null);
    const [settingsModal, setSettingsModal] = useState(false);
    const [inChatroomMode, setInChatroomMode] = useState(false); // ✅ State for chatroom mode

    const activeChat = chats.find((chat) => chat.id === activeChatId);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeChat?.messages]);

    const handleSendMessage = () => {
        if (!messageInput.trim()) return;

        const newMessage = {
            id: activeChat.messages.length + 1,
            text: messageInput,
            fromMe: true,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            status: "sent",
        };

        const updatedChats = chats.map((chat) =>
            chat.id === activeChatId
                ? { ...chat, messages: [...chat.messages, newMessage], typing: false }
                : chat
        );

        setChats(updatedChats);
        setMessageInput("");
    };

    const handleCreateUser = () => {
        const newUser = {
            id: chats.length + 1,
            name: newUserName || "New User",
            avatar: newUserAvatar || "https://randomuser.me/api/portraits/men/1.jpg",
            typing: false,
            messages: [],
        };

        setChats([...chats, newUser]);
        setNewUserName("");
        setNewUserAvatar("");
        setNewUserModal(false);
    };

    return (
        <div className="flex h-screen font-sans bg-blue-50">
            {/* Sidebar */}
            <div className="w-1/4 border-r border-blue-300 bg-blue-100 flex flex-col relative">
                {/* Header + Search + Chat List */}
                <div className="flex flex-col">
                    <Link href={"/home"} className="p-4 text-2xl font-bold text-blue-600">Let's Chat 💬</Link>
                    <input
                        type="search"
                        placeholder="Search chats"
                        className="mx-2 mb-2 w-[calc(100%-1rem)] text-black px-4 py-2 rounded-full border border-blue-300"
                    />
                </div>

                {/* Chat List (scrollable) */}
                <div className="flex-1 overflow-y-auto">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChatId(chat.id)}
                            className={`flex border-b-2 items-center px-4 py-2 cursor-pointer transition-colors ${chat.id === activeChatId ? "bg-blue-200 border-blue-400" : "bg-blue-50"
                                }`}
                        >
                            <img src={chat.avatar} alt={chat.name} className="w-11 h-11 rounded-full mr-3" />
                            <div className="flex-1">
                                <div className="font-bold text-black">{chat.name}</div>
                                <div className="text-sm text-gray-600 flex items-center">
                                    {chat.typing ? (
                                        <div className="flex items-center text-blue-600">
                                            <FaCircleNotch className="animate-spin text-sm mr-2" />
                                            <em>typing...</em>
                                        </div>
                                    ) : (
                                        chat.messages.at(-1)?.text || "No messages yet"
                                    )}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 ml-2">
                                {chat.isOnline ? (
                                    <FaCircle className="text-green-500 text-xs" />
                                ) : (
                                    <FaCircle className="text-gray-400 text-xs" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="border-t h-20 border-blue-300 bg-white p-2">
                    <div className="grid grid-cols-4 gap-4 text-gray-700">
                        {/* Create Meeting */}
                        <div className="relative group flex justify-center">
                            <div
                                className="w-15 h-15 rounded-full bg-blue-100 flex items-center justify-center"
                                onClick={() => setInChatroomMode(true)} // ✅ Set chatroom mode
                            >
                                <FaVideo className="text-2xl text-blue-600 cursor-pointer" />
                            </div>
                            <span className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Create Meeting
                            </span>
                        </div>

                        {/* Join Meeting */}
                        <div className="relative group flex justify-center">
                            <div className="w-15 h-15  rounded-full bg-blue-100 flex items-center justify-center">
                                <FaLink className="text-2xl text-blue-600 cursor-pointer" />
                            </div>
                            <span className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Join Meeting
                            </span>
                        </div>

                        {/* Status */}
                        <div className="relative group flex justify-center">
                            <div className="w-15 h-15  rounded-full bg-blue-100 flex items-center justify-center">
                                <FaUserCircle className="text-2xl text-blue-600 cursor-pointer" />
                            </div>
                            <span className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Status
                            </span>
                        </div>

                        {/* Call History */}
                        <div className="relative group flex justify-center">
                            <div className="w-15 h-15 rounded-full bg-blue-100 flex items-center justify-center">
                                <FaHistory className="text-2xl text-blue-600 cursor-pointer" />
                            </div>
                            <span className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Call History
                            </span>
                        </div>
                    </div>
                </div>

                {/* Create New User Button */}
                <div className="absolute bottom-25 right-6 p-4 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg" onClick={() => setNewUserModal(!newUserModal)}>
                    <FaPlus className="text-2xl" />
                </div>

                {/* Setting Button on the opposite side of the logo */}
                <div className="absolute top-4 right-6 p-2 bg-blue-500 text-white rounded-full cursor-pointer ">
                    <FaCog className="text-xl" onClick={() => setSettingsModal(!settingsModal)} />
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-white">
                {/* Chat Header - hide in chatroom mode */}
                {!inChatroomMode && (
                    <div className="flex items-center justify-between px-4 py-3 border-b border-blue-300 bg-blue-100">
                        <div className="flex items-center">
                            <img
                                src={activeChat.avatar}
                                alt={activeChat.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <div className="font-bold text-black text-lg">{activeChat.name}</div>
                                <div className="text-sm text-gray-500">
                                    {activeChat.typing ? "typing..." : "online"}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 mr-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-200 transition">
                                <FaPhone className="text-blue-600 text-lg" />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-200 transition">
                                <FaVideo className="text-blue-600 text-lg" />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-200 transition">
                                <FaInfoCircle className="text-blue-600 text-lg" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Chat or Chatroom Content */}
                <div className="flex-1 p-5 overflow-y-auto bg-blue-50">
                    {inChatroomMode ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to the Meeting Room</h2>
                            <p className="text-gray-600">Meeting functionalities coming soon...</p>
                            <button
                                onClick={() => setInChatroomMode(false)}
                                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full"
                            >
                                Exit Meeting
                            </button>
                        </div>
                    ) : (
                        <>
                            {activeChat.messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.fromMe ? "justify-end" : "justify-start"} mb-2`}>
                                    <div className={`p-3 rounded-xl max-w-[60%] shadow-sm ${msg.fromMe ? "bg-blue-100" : "bg-white"}`}>
                                        <div className="text-black">{msg.text}</div>
                                        <div className="text-xs text-right text-gray-500 mt-1">{msg.time}</div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messageEndRef} />
                        </>
                    )}
                </div>

                {/* Message Input - hide in chatroom mode */}
                {!inChatroomMode && (
                    <div className="flex items-center p-5 border-t border-blue-300 bg-gray-50">
                        <input
                            type="text"
                            placeholder="Type a message"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            className="flex-1 px-4 py-2 text-black border border-blue-300 rounded-full outline-none mr-4"
                        />
                        <div
                            onClick={handleSendMessage}
                            className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-700 transition"
                        >
                            <FaCircle className="text-xl" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
