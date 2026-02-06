import GlassCard from '@/components/ui/GlassCard';

export default function HODDashboard() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Department Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <GlassCard className="border-l-4 border-l-blue-500">
                    <h3 className="text-gray-400">Total Students</h3>
                    <div className="text-3xl font-bold text-white">1,240</div>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-purple-500">
                    <h3 className="text-gray-400">Faculty Members</h3>
                    <div className="text-3xl font-bold text-white">45</div>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-green-500">
                    <h3 className="text-gray-400">Placements</h3>
                    <div className="text-3xl font-bold text-white">89%</div>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-red-500">
                    <h3 className="text-gray-400">At Risk</h3>
                    <div className="text-3xl font-bold text-white">12</div>
                </GlassCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard className="h-96">
                    <h3 className="text-xl font-bold text-white mb-4">Department Performance</h3>
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Chart Placeholder
                    </div>
                </GlassCard>
                <GlassCard className="h-96">
                    <h3 className="text-xl font-bold text-white mb-4">Skill Gap Analysis</h3>
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Heatmap Placeholder
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
