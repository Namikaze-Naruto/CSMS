import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans">
            <Sidebar />
            <main className="pl-64 p-8">
                {children}
            </main>
        </div>
    );
}
