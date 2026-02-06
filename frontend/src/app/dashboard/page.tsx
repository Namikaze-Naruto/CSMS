import GlassCard from '@/components/ui/GlassCard';

export default function StudentDashboard() {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome back, Student</h1>
                    <p className="text-gray-400">Track your progress and skills</p>
                </div>
                <div className="bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold">
                    Semester 5
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard>
                    <h3 className="text-gray-400 mb-2">Overall Attendance</h3>
                    <div className="text-4xl font-bold text-green-400">85%</div>
                    <p className="text-sm text-gray-500 mt-2">Target: 75%</p>
                </GlassCard>

                <GlassCard>
                    <h3 className="text-gray-400 mb-2">Career Readiness</h3>
                    <div className="text-4xl font-bold text-blue-400">920</div>
                    <p className="text-sm text-gray-500 mt-2">Points Earned</p>
                </GlassCard>

                <GlassCard>
                    <h3 className="text-gray-400 mb-2">Pending Tasks</h3>
                    <div className="text-4xl font-bold text-orange-400">3</div>
                    <p className="text-sm text-gray-500 mt-2">Assignments Due</p>
                </GlassCard>
            </div>

            {/* Recent Activity / Graph Placeholder */}
            <GlassCard className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Performance Graph Component Here</p>
            </GlassCard>
        </div>
    );
}
