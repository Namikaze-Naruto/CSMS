'use client';
import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';

export default function UploadsPage() {
    const [uploadType, setUploadType] = useState('certificate');

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">My Uploads</h1>

            <div className="flex gap-4">
                <button
                    onClick={() => setUploadType('certificate')}
                    className={`px-6 py-2 rounded-lg transition-all ${uploadType === 'certificate' ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400'}`}
                >
                    Certificates
                </button>
                <button
                    onClick={() => setUploadType('project')}
                    className={`px-6 py-2 rounded-lg transition-all ${uploadType === 'project' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400'}`}
                >
                    Projects
                </button>
            </div>

            <GlassCard className="max-w-2xl">
                <h2 className="text-xl font-bold text-white mb-4">
                    {uploadType === 'certificate' ? 'Upload Certificate' : 'Submit Project'}
                </h2>

                <form className="space-y-4">
                    {uploadType === 'certificate' && (
                        <div>
                            <label className="block text-gray-300 mb-2">Course Type</label>
                            <select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500">
                                <option>Udemy - Web Development</option>
                                <option>Coursera - Data Science</option>
                                <option>NPTEL - Cloud Computing</option>
                                <option>Other</option>
                            </select>
                        </div>
                    )}

                    {uploadType === 'project' && (
                        <div>
                            <label className="block text-gray-300 mb-2">GitHub Repository Link</label>
                            <input type="url" placeholder="https://github.com/username/repo" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white" />
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-300 mb-2">Title/Description</label>
                        <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white" />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Upload Files (Images/PDF)</label>
                        <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center text-gray-400 hover:border-blue-500/50 transition-colors cursor-pointer">
                            Click or Drag to Upload
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold text-white hover:opacity-90">
                        Submit for Approval
                    </button>
                </form>
            </GlassCard>
        </div>
    );
}
