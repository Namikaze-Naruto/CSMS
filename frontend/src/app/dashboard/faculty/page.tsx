import GlassCard from '@/components/ui/GlassCard';

export default function FacultyDashboard() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Faculty Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard>
                    <h3 className="text-gray-400 mb-2">Today's Classes</h3>
                    <div className="text-3xl font-bold text-white">4</div>
                </GlassCard>
                <GlassCard>
                    <h3 className="text-gray-400 mb-2">Pending Reviews</h3>
                    <div className="text-3xl font-bold text-yellow-400">12</div>
                    <p className="text-sm text-gray-500 mt-2">Assignments & Labs</p>
                </GlassCard>
                <GlassCard>
                    <h3 className="text-gray-400 mb-2">Average Attendance</h3>
                    <div className="text-3xl font-bold text-green-400">78%</div>
                </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <GlassCard>
                    <h3 className="text-xl font-bold text-white mb-4">Upcoming Classes</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                                <div>
                                    <p className="font-semibold text-white">CS-30{i}: Data Structures</p>
                                    <p className="text-sm text-gray-400">10:00 AM - 11:00 AM • Lab 2</p>
                                </div>
                                <button className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded hover:bg-blue-600/30">
                                    Mark Attendance
                                </button>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard>
                    <h3 className="text-xl font-bold text-white mb-4">Student At-Risk Alerts</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                            <div className="w-2 h-12 bg-red-500 rounded-full"></div>
                            <div>
                                <p className="font-bold text-red-200">Attendace Warning</p>
                                <p className="text-sm text-gray-400">Roll #102 created an alert (Low Attendance)</p>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
