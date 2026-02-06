'use client';
import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';

export default function PointSystemConfig() {
    const [configs, setConfigs] = useState([
        { id: 1, type: 'Certificate (Course)', points: 50 },
        { id: 2, type: 'Certificate (Internship)', points: 100 },
        { id: 3, type: 'Project (Hackathon)', points: 150 },
        { id: 4, type: 'Research Paper', points: 200 },
    ]);

    const handleUpdate = (id: number, points: string) => {
        // Logic to update state and eventually backend
        const updated = configs.map(c => c.id === id ? { ...c, points: parseInt(points) } : c);
        setConfigs(updated);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">Point System Configuration</h1>
            <p className="text-gray-400">Define how many points students earn for each activity.</p>

            <GlassCard className="max-w-3xl">
                <div className="space-y-6">
                    {configs.map((config) => (
                        <div key={config.id} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                            <div>
                                <p className="font-semibold text-white">{config.type}</p>
                                <p className="text-sm text-gray-500">Base points awarded upon approval</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    value={config.points}
                                    onChange={(e) => handleUpdate(config.id, e.target.value)}
                                    className="w-24 bg-black/20 border border-white/10 rounded-lg p-2 text-white text-center"
                                />
                                <button className="text-blue-400 hover:text-blue-300">Save</button>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

            <div className="flex justify-end">
                <button className="bg-green-600 px-6 py-2 rounded-lg text-white font-bold hover:bg-green-500">
                    Apply Changes Globally
                </button>
            </div>
        </div>
    );
}
