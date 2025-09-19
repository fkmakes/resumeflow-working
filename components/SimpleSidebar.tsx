"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Jobs", href: "/jobs" },
  { name: "Candidates", href: "/candidates" },
  { name: "Interviews", href: "/interviews" },
  { name: "Analytics", href: "/analytics" },
  { name: "Notifications", href: "/notifications" },
  { name: "Company Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
];

export default function SimpleSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">📋 ResumeFlow</span>
          </div>
        </div>
        <div className="mt-8 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive
                      ? "bg-indigo-800 text-white"
                      : "text-indigo-100 hover:bg-indigo-600"
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
          <div className="flex items-center">
            <div>
              <div className="inline-block h-9 w-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                JD
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs font-medium text-indigo-200">HR Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}