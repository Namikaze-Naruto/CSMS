'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Students', href: '/dashboard/students', role: 'faculty' },
    { name: 'My Uploads', href: '/dashboard/student/uploads', role: 'student' },
    { name: 'Coordinators', href: '/dashboard/hod/coordinators', role: 'hod' },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 backdrop-blur-xl bg-black/20 text-white border-r border-white/10 p-4 pt-20">
            <div className="mb-8 px-4">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">CSMS</h2>
            </div>
            <nav className="space-y-2">
                {sidebarItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg transition-all duration-200 
                ${pathname.startsWith(item.href) ? 'bg-white/10 shadow-lg border border-white/10' : 'hover:bg-white/5'}
              `}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
