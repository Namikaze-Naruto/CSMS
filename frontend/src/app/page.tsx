import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-4">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                        Next-Gen <br /> Academic Governance
                    </h1>
                    <p className="text-gray-300 text-lg">
                        A centralized, AI-powered platform for students, faculty, and HODs.
                        Track attendance, skills, and career readiness in one unified system.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/dashboard" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30">
                            Get Started
                        </Link>
                        <Link href="/login" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold backdrop-blur-md transition-all">
                            Login
                        </Link>
                    </div>
                </div>

                <GlassCard className="p-8 transform hover:scale-105 transition-all duration-300">
                    <div className="space-y-4">
                        <div className="h-2 w-20 bg-blue-500/50 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-white">Student Stats</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-300">
                                <span>Attendance</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-300 mt-2">
                                <span>Skill Score</span>
                                <span>92%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-purple-400 h-2 rounded-full w-[92%]"></div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </main>
    );
}
