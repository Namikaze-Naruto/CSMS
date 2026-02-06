'use client';
import GlassCard from '@/components/ui/GlassCard';

export default function ManageCoordinators() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Manage Coordinators</h1>
                <button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-500">
                    + Add Coordinator
                </button>
            </div>

            <GlassCard>
                <table className="w-full text-left text-gray-300">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-white/5 hover:bg-white/5">
                            <td className="p-4">John Doe</td>
                            <td className="p-4">john.doe@college.edu</td>
                            <td className="p-4"><span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Coordinator</span></td>
                            <td className="p-4"><span className="text-green-400">Active</span></td>
                            <td className="p-4">
                                <button className="text-blue-400 hover:text-blue-300 mr-2">Edit</button>
                                <button className="text-red-400 hover:text-red-300">Remove</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                            <td className="p-4">Jane Smith</td>
                            <td className="p-4">jane.smith@college.edu</td>
                            <td className="p-4"><span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Co-Coordinator</span></td>
                            <td className="p-4"><span className="text-green-400">Active</span></td>
                            <td className="p-4">
                                <button className="text-blue-400 hover:text-blue-300 mr-2">Edit</button>
                                <button className="text-red-400 hover:text-red-300">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
}
