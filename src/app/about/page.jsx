// pages/about.jsx

import Link from "next/link";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

export default function AboutPage() {
    return (
        <>

            <div className="min-h-screen  bg-white text-gray-800 font-sans">
            <Navbar />

                {/* Hero Section */}
                <section className="relative  bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-32 px-6">
                    <div className="absolute mt-15 inset-0 bg-blue-900/70" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-extrabold mb-4">About LetsTalk</h1>
                        <p className="text-lg text-gray-100">
                            Bridging the gap with seamless video communication around the world.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                At LetsTalk, we’re redefining how people connect. Whether for business or personal moments, our platform ensures clear, secure, and human interaction.
                            </p>
                        </div>
                        <img
                            src="/images/mission.jpg"
                            alt="Mission"
                            className="rounded-xl shadow-2xl"
                        />
                    </div>
                </section>

                {/* Features Section with Icons */}
                <section className="py-20 px-6 bg-gray-100">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Choose LetsTalk?</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "HD Video & Audio",
                                    desc: "Crystal-clear quality for every meeting, on any device.",
                                    icon: "🎥",
                                },
                                {
                                    title: "Secure Meetings",
                                    desc: "End-to-end encryption with enterprise-grade protection.",
                                    icon: "🔐",
                                },
                                {
                                    title: "Cross-platform",
                                    desc: "Seamlessly works across all platforms.",
                                    icon: "📱",
                                },
                                {
                                    title: "Real-Time Chat",
                                    desc: "Engage with participants during calls effortlessly.",
                                    icon: "💬",
                                },
                                {
                                    title: "Screen Sharing",
                                    desc: "Share screens or specific apps easily.",
                                    icon: "🖥️",
                                },
                                {
                                    title: "Cloud Recordings",
                                    desc: "Secure and accessible meeting recordings anytime.",
                                    icon: "☁️",
                                },
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl shadow-md text-left"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Our Journey</h2>
                        <div className="border-l-4 border-blue-600 pl-6 space-y-10">
                            {[
                                {
                                    year: "2025",
                                    title: "Founded",
                                    desc: "LetsTalk began with a mission to redefine online communication and bring people closer.",
                                },
                                {
                                    year: "2026",
                                    title: "1M+ Users",
                                    desc: "We grew rapidly thanks to a passionate user base and a commitment to reliable service.",
                                },
                                {
                                    year: "2027",
                                    title: "Enterprise Expansion",
                                    desc: "Introduced enterprise features, advanced security, and integrated workflows.",
                                },
                                {
                                    year: "2028",
                                    title: "AI-Powered Features",
                                    desc: "Smart summaries, real-time translations, and meeting insights revolutionized usage.",
                                },
                            ].map((event, idx) => (
                                <div key={idx}>
                                    <div className="mb-2 text-sm text-blue-600 font-semibold">{event.year}</div>
                                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                                    <p className="text-gray-600">{event.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-700 mb-10">Meet the Team</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    name: "Sara Walker",
                                    role: "CEO & Co-founder",
                                    image: "/images/team1.jpg",
                                },
                                {
                                    name: "Jamal Kim",
                                    role: "CTO & Architect",
                                    image: "/images/team2.jpg",
                                },
                                {
                                    name: "Nina Hart",
                                    role: "Design Lead",
                                    image: "/images/team3.jpg",
                                },
                            ].map((member, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl shadow-md"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-6 bg-blue-400 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center" />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
                        <p className="text-lg mb-6">
                            Join thousands of professionals, educators, and families using LetsTalk every day.
                        </p>
                        <Link
                            href="/signup"
                            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            Sign Up Free
                        </Link>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}
