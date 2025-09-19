"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BriefcaseIcon,
  UsersIcon,
  MicrophoneIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  UserCircleIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Jobs", href: "/jobs", icon: BriefcaseIcon },
  { name: "Candidates", href: "/candidates", icon: UsersIcon },
  { name: "Interviews", href: "/interviews", icon: MicrophoneIcon },
  { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
  { name: "Notifications", href: "/notifications", icon: BellIcon },
  { name: "Company Profile", href: "/profile", icon: UserCircleIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex items-center">
            <AcademicCapIcon className="h-8 w-8 text-white" />
            <span className="ml-2 text-white text-xl font-bold">ResumeFlow</span>
          </div>
        </div>
        <div className="mt-8 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
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
                  <Icon className="mr-3 h-6 w-6" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff"
                alt=""
              />
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